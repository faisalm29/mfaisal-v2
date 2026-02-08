import { SectionContainer } from "../SectionContainer";
import { TrackItem } from "../TrackItem";
import { getTopTracks } from "@/lib/spotify";
import { getCurrentDateTime } from "@/lib/utils";

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
      <small className="text-muted-foreground">
        Last updated:{" "}
        <time dateTime={getCurrentDateTime().toISOString().split("T")[0]}>
          {getCurrentDateTime().toLocaleString("en-US", {
            timeZone: "Asia/Jakarta",
            dateStyle: "medium",
            timeStyle: "short",
            hour12: false,
          })}
        </time>
      </small>
    </SectionContainer>
  );
};

export { TopTracks };
