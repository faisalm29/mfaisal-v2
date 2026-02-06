import { SectionContainer } from "../SectionContainer";
import { TrackItem } from "../TrackItem";

const music = [
  {
    title: "Midnight City Lights ",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
  {
    title: "Sunset Boulevard",
    artist: "Echo Valley",
    album: "Golden Hour",
    duration: "4:12",
  },
  {
    title: "Starlight Serenade",
    artist: "Luna & Co",
    album: "Moonlit Dreams",
    duration: "3:58",
  },
  {
    title: "Urban Jungle",
    artist: "The Midnight Riders",
    album: "City Lights",
    duration: "3:42",
  },
  {
    title: "Ocean Waves",
    artist: "Coastal Vibes",
    album: "Seaside",
    duration: "4:23",
  },
  {
    title: "Mountain Echo",
    artist: "Peak Harmony",
    album: "Alpine Heights",
    duration: "3:51",
  },
  {
    title: "Neon Paradise",
    artist: "Synth Wave",
    album: "Retro Future",
    duration: "3:36",
  },
  {
    title: "Crystal Dreams",
    artist: "Ethereal Sounds",
    album: "Transcendence",
    duration: "4:14",
  },
];

const TopTracks = () => {
  return (
    <SectionContainer>
      <div>
        <h1>Top Tracks</h1>
        <p className="text-muted-foreground">
          My current Spotify heavy rotation. Updated daily.
        </p>
      </div>
      <ol className="flex flex-col space-y-2">
        {music.map((song, number) => (
          <li key={song.title}>
            <TrackItem track={{ number, ...song }} />
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
};

export { TopTracks };
