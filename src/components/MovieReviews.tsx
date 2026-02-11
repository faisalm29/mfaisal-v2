import { MovieItem } from "./MovieItem";
import { ViewMoreMoviesButton } from "./ViewMoreMoviesButton";
import { Movie } from "@/lib/tmdb.types";

interface MovieReviewsSections {
  movies: Movie[];
  viewMoreButton?: boolean;
}

const MovieReviews = ({ movies, viewMoreButton }: MovieReviewsSections) => {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      ))}
      {viewMoreButton && (
        <li>
          <ViewMoreMoviesButton href="/movies" />
        </li>
      )}
    </ul>
  );
};

export { MovieReviews };
