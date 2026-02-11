import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { MovieReviews } from "@/components/MovieReviews";
import { allMovieReviewPosts } from "content-collections";
import { getMovies } from "@/lib/tmdb";
import { sortMovies } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Reviews",
  description: "My take on the movies I've watched recently.",
  openGraph: {
    title: "Movie Reviews",
    description: "My take on the movies I've watched recently.",
  },
};

const AllMoviesPage = async () => {
  const movieIds = allMovieReviewPosts.map((movie) => movie.id);
  const movies = sortMovies(await getMovies(movieIds));
  return (
    <PageContainer>
      <SectionContainer>
        <div className="flex flex-col space-y-2">
          <h1 className="font-display text-2xl font-medium">Movie Reviews</h1>
          <p className="text-muted-foreground">
            My take on the movies I've watched recently.
          </p>
        </div>
        <MovieReviews movies={movies} />
      </SectionContainer>
    </PageContainer>
  );
};

export default AllMoviesPage;
