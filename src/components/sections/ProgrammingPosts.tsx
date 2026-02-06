import { SectionContainer } from "../SectionContainer";
import { PostItem } from "../PostItem";
import { allGeneralPosts } from "content-collections";
import { sortPosts } from "@/lib/utils";
import { ViewAllButton } from "../ViewAllButton";

const ProgrammingPosts = () => {
  const sortedPosts = sortPosts(allGeneralPosts);
  return (
    <SectionContainer>
      <h1>Programming</h1>
      <ul>
        {sortedPosts.map((post) => (
          <li key={post.slug}>
            <PostItem post={post} />
          </li>
        ))}
        <li className="mt-2">
          <ViewAllButton href="/programming" />
        </li>
      </ul>
    </SectionContainer>
  );
};

export { ProgrammingPosts };
