import { PostItem } from "./PostItem";
import { type ProgrammingPost } from "content-collections";
import { ViewMoreButton } from "./ViewMoreButton";

interface ProgrammingPostsSection {
  programmingPosts: ProgrammingPost[];
  viewMoreButton?: boolean;
}

const ProgrammingPosts = ({
  programmingPosts,
  viewMoreButton,
}: ProgrammingPostsSection) => {
  return (
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
  );
};

export { ProgrammingPosts };
