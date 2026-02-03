import { LatestPostItem } from "../LatestPostItem";
import { sortDesc } from "@/lib/utils";
import { allBlogs } from "content-collections";

const LatestPosts = () => {
  const sortedPosts = sortDesc(allBlogs);
  return (
    <section>
      <h2 className="heading-display font-bold">Latest Posts</h2>
      {sortedPosts.map((post) => (
        <LatestPostItem key={post.slug} post={post} />
      ))}
    </section>
  );
};

export { LatestPosts };
