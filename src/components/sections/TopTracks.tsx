import { SectionContainer } from "../SectionContainer";
import { TrackItem } from "../TrackItem";
import { getTopTracks } from "@/lib/spotify";

const TopTracks = async () => {
  const topTracks = await getTopTracks();
  return (
    <SectionContainer>
      <div>
        <h1>Top Tracks</h1>
        <p className="text-muted-foreground">
          My current Spotify heavy rotation. Updated daily.
        </p>
      </div>
      <ol className="flex flex-col space-y-2">
        {topTracks.map((track, number) => (
          <li key={track.url}>
            <TrackItem number={number} {...track} />
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
};

export { TopTracks };
