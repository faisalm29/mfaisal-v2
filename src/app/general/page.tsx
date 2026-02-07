import { PageContainer } from "@/components/PageContainer";
import { GeneralPosts } from "@/components/sections";
import { allGeneralPosts } from "content-collections";
import { sortPosts } from "@/lib/utils";

const AllGeneralPage = () => {
  const sortedPosts = sortPosts(allGeneralPosts);
  return (
    <PageContainer>
      <h1>General</h1>
      <GeneralPosts generalPosts={sortedPosts} />
    </PageContainer>
  );
};

export default AllGeneralPage;
