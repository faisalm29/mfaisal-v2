import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { getYear } from "@/lib/utils";
import { Movie } from "@/lib/tmdb.types";

const MovieItem = ({ movie }: { movie: Movie }) => {
  const { id, movie_credits, movie_details, movie_local_data } = movie;
  return (
    <Link
      href={`/${movie_local_data.category}/${movie_local_data.slug}`}
      aria-label={movie_details.title}
      title={movie_details.title}
      className="border-border hover:bg-accent/50 block rounded-md border p-3 transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col space-y-3">
        <div className="overflow-hidden rounded-md">
          <ExportedImage
            src={`https://image.tmdb.org/t/p/w500${movie_details.poster_path}`}
            alt={`${movie_details.title}'s movie poster`}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={750}
          />
        </div>
        <div>
          <h3 className="line-clamp-1 text-sm font-medium">
            {movie_details.title}
          </h3>
          <time
            dateTime={movie_details.release_date}
            className="text-muted-foreground text-sm"
          >
            {getYear(movie_details.release_date)}
          </time>
        </div>
      </div>
    </Link>
  );
};

export { MovieItem };
