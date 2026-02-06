import {
  GeneralPosts,
  ProgrammingPosts,
  MovieReviews,
} from "@/components/sections";
import { PageContainer } from "@/components/PageContainer";

const PostPage = () => {
  return (
    <PageContainer>
      <h1>Blog</h1>
      <GeneralPosts />
      <ProgrammingPosts />
      <MovieReviews />
    </PageContainer>
  );
};

export default PostPage;
