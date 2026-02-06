import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Movie {
  title: string;
  releasedDate: string;
  image: StaticImageData;
}

const MovieItem = ({ title, releasedDate, image }: Movie) => {
  return (
    <Link
      href="/"
      aria-label={title}
      title={title}
      className="border-border hover:bg-accent/50 block rounded-md border p-3 transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col space-y-3">
        <div className="overflow-hidden rounded-md">
          <Image src={image} alt={`${title}'s movie poster`} />
        </div>
        <div>
          <h1 className="line-clamp-1 text-sm font-medium">{title}</h1>
          <time
            dateTime={releasedDate}
            className="text-muted-foreground text-sm"
          >
            {releasedDate}
          </time>
        </div>
      </div>
    </Link>
  );
};

export { MovieItem };
