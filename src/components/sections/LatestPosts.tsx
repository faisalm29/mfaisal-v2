import { allGeneralPosts } from "content-collections";
import { SectionContainer } from "../SectionContainer";
import { PostItem } from "../PostItem";
import { sortPosts } from "@/lib/utils";

const LatestPosts = () => {
  const sortedPosts = sortPosts(allGeneralPosts);
  return (
    <SectionContainer>
      <h1>Latest Posts</h1>
      <ul>
        {sortedPosts.map((post) => (
          <li key={post.slug}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export { LatestPosts };
