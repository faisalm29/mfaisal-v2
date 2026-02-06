import Image from "next/image";
import placeholderAlbumCover from "../../public/placeholder.jpg";

interface Track {
  title: string;
  artist: string;
  duration: string;
  number: number;
}

const TrackItem = ({ track }: { track: Track }) => {
  const { title, artist, duration, number } = track;
  return (
    <a
      href="/"
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
            <Image
              src={placeholderAlbumCover}
              alt={`${title} album's cover`}
              width={32}
              height={32}
              className="size-full object-cover grayscale"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-1 text-balance">
            <h1 className="line-clamp-1">{title}</h1>
            <p className="text-muted-foreground line-clamp-1 text-sm">
              {artist}
            </p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{duration}</p>
      </div>
    </a>
  );
};

export { TrackItem };
