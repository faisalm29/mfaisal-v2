import { SectionContainer } from "../SectionContainer";
import { MovieItem } from "../MovieItem";
import { ViewAllMovieButton } from "../ViewAllMovieButton";
import { Movie } from "@/lib/tmdb.types";

interface MovieReviewsSections {
  movies: Movie[];
  viewAllButton?: boolean;
}

const MovieReviews = ({ movies, viewAllButton }: MovieReviewsSections) => {
  return (
    <SectionContainer>
      <h1>Movie Reviews</h1>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        ))}
        {viewAllButton && (
          <li>
            <ViewAllMovieButton href="/movies" />
          </li>
        )}
      </ul>
    </SectionContainer>
  );
};

export { MovieReviews };
