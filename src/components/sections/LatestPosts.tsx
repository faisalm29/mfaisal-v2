import { SectionContainer } from "../SectionContainer";
import { LatestPostItem } from "../LatestPostItem";
import { ViewAllButton } from "../ViewAllButton";

interface LatesPost {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
}

interface LatestPostsSection {
  latesPost: LatesPost[];
  viewAllButton?: boolean;
}

const LatestPosts = async ({
  latesPost,
  viewAllButton,
}: LatestPostsSection) => {
  return (
    <SectionContainer>
      <h1>Latest Posts</h1>
      <ul>
        {latesPost.map((post) => (
          <li key={post.slug}>
            <LatestPostItem post={post} />
          </li>
        ))}
        {viewAllButton && (
          <li className="mt-2">
            <ViewAllButton href="/blog" />
          </li>
        )}
      </ul>
    </SectionContainer>
  );
};

export { LatestPosts };
