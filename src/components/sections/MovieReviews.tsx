import { SectionContainer } from "../SectionContainer";
import { MovieItem } from "../MovieItem";
import { ViewMoreMoviesButton } from "../ViewMoreMoviesButton";
import { Movie } from "@/lib/tmdb.types";

interface MovieReviewsSections {
  movies: Movie[];
  viewMoreButton?: boolean;
}

const MovieReviews = ({ movies, viewMoreButton }: MovieReviewsSections) => {
  return (
    <SectionContainer>
      <h1>Movie Reviews</h1>
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
    </SectionContainer>
  );
};

export { MovieReviews };
