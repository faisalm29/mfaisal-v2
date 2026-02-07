import { PageContainer } from "@/components/PageContainer";
import { ProgrammingPosts } from "@/components/sections";
import { allProgrammingPosts } from "content-collections";
import { sortPosts } from "@/lib/utils";

const AllProgrammingPage = () => {
  const sortedPosts = sortPosts(allProgrammingPosts);
  return (
    <PageContainer>
      <h1>Programming</h1>
      <ProgrammingPosts programmingPosts={sortedPosts} />
    </PageContainer>
  );
};

export default AllProgrammingPage;
