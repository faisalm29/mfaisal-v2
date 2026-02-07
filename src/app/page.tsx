import {
  allGeneralPosts,
  allProgrammingPosts,
  allMovieReviewPosts,
} from "content-collections";
import { Summary, LatestPosts } from "@/components/sections";
import { PageContainer } from "@/components/PageContainer";
import { sortPosts } from "@/lib/utils";
import { getMovies } from "@/lib/tmdb";

export default async function Home() {
  const movieIds = allMovieReviewPosts.map((movie) => movie.id);
  const movies = await getMovies(movieIds);

  const generalPosts = allGeneralPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
    publishedAt: post.publishedAt,
  }));

  const programmingPosts = allProgrammingPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
    publishedAt: post.publishedAt,
  }));

  const movieReviewPosts = movies.map((post) => ({
    slug: post.movie_local_data.slug,
    title: post.movie_details.title,
    category: post.movie_local_data.category,
    publishedAt: post.movie_local_data.publishedAt,
  }));

  const sortedLatestPosts = sortPosts([
    ...generalPosts,
    ...programmingPosts,
    ...movieReviewPosts,
  ]).slice(0, 10);

  return (
    <PageContainer>
      <Summary />
      <LatestPosts latesPost={sortedLatestPosts} viewAllButton />
    </PageContainer>
  );
}
