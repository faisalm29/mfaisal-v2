import { PageContainer } from "@/components/PageContainer";
import { MovieReviews } from "@/components/sections";
import { allMovieReviewPosts } from "content-collections";
import { getMovies } from "@/lib/tmdb";
import { sortMovies } from "@/lib/utils";

const AllMoviesPage = async () => {
  const movieIds = allMovieReviewPosts.map((movie) => movie.id);
  const movies = sortMovies(await getMovies(movieIds));
  return (
    <PageContainer>
      <h1>Movies</h1>
      <MovieReviews movies={movies} />
    </PageContainer>
  );
};

export default AllMoviesPage;
