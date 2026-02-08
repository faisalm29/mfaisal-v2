import { type GeneralPost } from "content-collections";
import { SectionContainer } from "../SectionContainer";
import { PostItem } from "../PostItem";
import { ViewMoreButton } from "../ViewMoreButton";

interface GeneralPostsSection {
  generalPosts: GeneralPost[];
  viewMorebutton?: boolean;
}

const GeneralPosts = ({
  generalPosts,
  viewMorebutton,
}: GeneralPostsSection) => {
  return (
    <SectionContainer>
      <h1>General</h1>
      <ul>
        {generalPosts.map((post) => (
          <li key={post.slug}>
            <PostItem post={post} />
          </li>
        ))}
        {viewMorebutton && (
          <li className="mt-2">
            <ViewMoreButton href="/general" />
          </li>
        )}
      </ul>
    </SectionContainer>
  );
};

export { GeneralPosts };
