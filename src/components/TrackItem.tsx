import ExportedImage from "next-image-export-optimizer";
import { TopTrack } from "@/lib/spotify.types";
import { convertMsToMinutes } from "@/lib/utils";

type TrackItemProps = TopTrack & {
  number: number;
};

const TrackItem = ({ number, ...track }: TrackItemProps) => {
  const { album, artists, duration, name, url } = track;
  const albumCover = album.images.at(-1);

  return (
    <a
      href={url}
      target="_blank"
      className="border-border hover:bg-accent/50 flex items-start justify-between gap-7 rounded-md border px-3 py-2.5 duration-300 ease-in-out"
    >
      <div className="relative">
        <span className="text-muted-foreground absolute top-1 text-sm">
          {number + 1}.
        </span>
      </div>
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="size-10 shrink-0 items-center justify-center overflow-hidden rounded-sm">
            {albumCover ? (
              <ExportedImage
                src={albumCover.url}
                alt={`${name} album's cover`}
                width={albumCover.width}
                height={albumCover.height}
                className="size-full object-cover"
              />
            ) : (
              <div className="bg-muted-foreground size-full" />
            )}
          </div>
          <div className="flex min-w-0 flex-col gap-1 text-balance">
            <h1 className="line-clamp-1">{name}</h1>
            <p className="text-muted-foreground line-clamp-1 text-sm">
              {artists.map((artist) => artist.name).join(", ")}
            </p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          {convertMsToMinutes(duration)}
        </p>
      </div>
    </a>
  );
};

export { TrackItem };
