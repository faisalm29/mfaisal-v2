import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { GeneralPosts } from "@/components/GeneralPosts";
import { allGeneralPosts } from "content-collections";
import { sortPosts } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Writings",
  description: "Writings about anything except programming.",
  openGraph: {
    title: "General Writings",
    description: "Writings about anything except programming.",
  },
};

const AllGeneralPage = () => {
  const sortedPosts = sortPosts(allGeneralPosts);
  return (
    <PageContainer>
      <SectionContainer>
        <div className="flex flex-col space-y-2">
          <h1 className="font-display text-2xl font-medium">General</h1>
          <p className="text-muted-foreground">
            Writings about anything except programming.
          </p>
        </div>
        <GeneralPosts generalPosts={sortedPosts} />
      </SectionContainer>
    </PageContainer>
  );
};

export default AllGeneralPage;
