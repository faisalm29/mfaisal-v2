import {
  GeneralPosts,
  ProgrammingPosts,
  MovieReviews,
} from "@/components/sections";
import { PageContainer } from "@/components/PageContainer";
import {
  allGeneralPosts,
  allProgrammingPosts,
  allMovieReviewPosts,
} from "content-collections";
import { getMovies } from "@/lib/tmdb";
import { sortPosts, sortMovies } from "@/lib/utils";

const PostPage = async () => {
  const sortedGeneralPosts = sortPosts(allGeneralPosts).slice(0, 5);
  const sortedProgrammingPosts = sortPosts(allProgrammingPosts).slice(0, 5);
  const movieIds = allMovieReviewPosts.map((movie) => movie.id);
  const movies = sortMovies(await getMovies(movieIds)).slice(0, 5);
  return (
    <PageContainer>
      <h1>Blog</h1>
      <GeneralPosts generalPosts={sortedGeneralPosts} viewAllButton />
      <ProgrammingPosts
        programmingPosts={sortedProgrammingPosts}
        viewAllButton
      />
      <MovieReviews movies={movies} viewAllButton />
    </PageContainer>
  );
};

export default PostPage;
