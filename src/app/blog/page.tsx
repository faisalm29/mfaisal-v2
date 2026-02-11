import { GeneralPosts } from "@/components/GeneralPosts";
import { ProgrammingPosts } from "@/components/ProgrammingPosts";
import { MovieReviews } from "@/components/MovieReviews";
import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import {
  allGeneralPosts,
  allProgrammingPosts,
  allMovieReviewPosts,
} from "content-collections";
import { getMovies } from "@/lib/tmdb";
import { sortPosts, sortMovies } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "All of my writings.",
  openGraph: {
    title: "Blog",
    description: "All of my writings.",
  },
};

const BlogPage = async () => {
  const sortedGeneralPosts = sortPosts(allGeneralPosts).slice(0, 5);
  const sortedProgrammingPosts = sortPosts(allProgrammingPosts).slice(0, 5);
  const movieIds = allMovieReviewPosts.map((movie) => movie.id);
  const movies = sortMovies(await getMovies(movieIds)).slice(0, 5);
  return (
    <PageContainer>
      <h1 className="font-display text-2xl font-medium">Blog</h1>
      <SectionContainer>
        <div className="flex flex-col space-y-2">
          <h2 className="font-display text-xl font-medium">General</h2>
          <p className="text-muted-foreground">
            Writings about anything except programming.
          </p>
        </div>
        <GeneralPosts generalPosts={sortedGeneralPosts} viewMorebutton />
      </SectionContainer>
      <SectionContainer>
        <div className="flex flex-col space-y-2">
          <h2 className="font-display text-xl font-medium">Programming</h2>
          <p className="text-muted-foreground">
            Writings specifically about programming.
          </p>
        </div>
        <ProgrammingPosts
          programmingPosts={sortedProgrammingPosts}
          viewMoreButton
        />
      </SectionContainer>
      <SectionContainer>
        <div className="flex flex-col space-y-2">
          <h2 className="font-display text-xl font-medium">Movie Reviews</h2>
          <p className="text-muted-foreground">
            My take on the movies I've watched recently.
          </p>
        </div>
        <MovieReviews movies={movies} viewMoreButton />
      </SectionContainer>
    </PageContainer>
  );
};

export default BlogPage;
