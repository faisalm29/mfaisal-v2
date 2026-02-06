const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Spotify environment variables");
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("Spotify token error:", err);
    throw new Error("Failed to refresh token.");
  }

  const data = await response.json();

  return data.access_token;
}

export async function getTopTracks(): Promise<
  Array<{
    url: string;
    name: string;
    artists: Array<{
      name: string;
    }>;
    album: {
      image: {
        url: string;
        width: number;
        height: number;
      };
      name: string;
    };
  }>
> {
  const accessToken = await getAccessToken();

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    const err = await response.text();
    console.error("Spotify top tracks error:", err);
    throw new Error("Failed to fetch top tracks");
  }

  const { items } = await response.json();

  const tracks = items.map((track: Spotify.Track) => ({
    url: track.external_urls.spotify,
    name: track.name,
    artists: track.artists,
    album: {
      image: {
        url: track.album.images.at(-1)?.url ?? "",
        width: track.album.images.at(-1)?.width ?? 64,
        height: track.album.images.at(-1)?.height ?? 64,
      },
      name: track.album.name,
    },
  }));

  return tracks;
}
