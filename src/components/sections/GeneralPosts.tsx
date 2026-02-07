import { type GeneralPost } from "content-collections";
import { SectionContainer } from "../SectionContainer";
import { PostItem } from "../PostItem";
import { ViewAllButton } from "../ViewAllButton";

interface GeneralPostsSection {
  generalPosts: GeneralPost[];
  viewAllButton?: boolean;
}

const GeneralPosts = ({ generalPosts, viewAllButton }: GeneralPostsSection) => {
  return (
    <SectionContainer>
      <h1>General</h1>
      <ul>
        {generalPosts.map((post) => (
          <li key={post.slug}>
            <PostItem post={post} />
          </li>
        ))}
        {viewAllButton && (
          <li className="mt-2">
            <ViewAllButton href="/general" />
          </li>
        )}
      </ul>
    </SectionContainer>
  );
};

export { GeneralPosts };
