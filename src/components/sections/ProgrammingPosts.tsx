import { SectionContainer } from "../SectionContainer";
import { PostItem } from "../PostItem";
import { type ProgrammingPost } from "content-collections";
import { ViewAllButton } from "../ViewAllButton";

interface ProgrammingPostsSection {
  programmingPosts: ProgrammingPost[];
  viewAllButton?: boolean;
}

const ProgrammingPosts = ({
  programmingPosts,
  viewAllButton,
}: ProgrammingPostsSection) => {
  return (
    <SectionContainer>
      <h1>Programming</h1>
      <ul>
        {programmingPosts.map((post) => (
          <li key={post.slug}>
            <PostItem post={post} />
          </li>
        ))}
        {viewAllButton && (
          <li className="mt-2">
            <ViewAllButton href="/programming" />
          </li>
        )}
      </ul>
    </SectionContainer>
  );
};

export { ProgrammingPosts };
