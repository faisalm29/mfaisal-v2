import { SectionContainer } from "../SectionContainer";
import { PostItem } from "../PostItem";
import { type ProgrammingPost } from "content-collections";
import { ViewMoreButton } from "../ViewMoreButton";

interface ProgrammingPostsSection {
  programmingPosts: ProgrammingPost[];
  viewMoreButton?: boolean;
}

const ProgrammingPosts = ({
  programmingPosts,
  viewMoreButton,
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
        {viewMoreButton && (
          <li className="mt-2">
            <ViewMoreButton href="/programming" />
          </li>
        )}
      </ul>
    </SectionContainer>
  );
};

export { ProgrammingPosts };
