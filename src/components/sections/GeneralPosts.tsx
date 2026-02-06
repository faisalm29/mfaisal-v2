import { allGeneralPosts } from "content-collections";
import { sortPosts } from "@/lib/utils";
import { SectionContainer } from "../SectionContainer";
import { PostItem } from "../PostItem";
import { ViewAllButton } from "../ViewAllButton";

const GeneralPosts = () => {
  const sortedPosts = sortPosts(allGeneralPosts);

  return (
    <SectionContainer>
      <h1>General</h1>
      <ul>
        {sortedPosts.map((post) => (
          <li key={post.slug}>
            <PostItem post={post} />
          </li>
        ))}
        <li className="mt-2">
          <ViewAllButton href="/general" />
        </li>
      </ul>
    </SectionContainer>
  );
};

export { GeneralPosts };
