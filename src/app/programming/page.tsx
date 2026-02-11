import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { ProgrammingPosts } from "@/components/ProgrammingPosts";
import { allProgrammingPosts } from "content-collections";
import { sortPosts } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programming Writings",
  description: "Writings specifically about programming.",
  openGraph: {
    title: "Programming Writings",
    description: "Writings specifically about programming.",
  },
};

const AllProgrammingPage = () => {
  const sortedPosts = sortPosts(allProgrammingPosts);
  return (
    <PageContainer>
      <SectionContainer>
        <div className="flex flex-col space-y-2">
          <h1 className="font-display text-2xl font-medium">Programming</h1>
          <p className="text-muted-foreground">
            Writings specifically about programming.
          </p>
        </div>
        <ProgrammingPosts programmingPosts={sortedPosts} />
      </SectionContainer>
    </PageContainer>
  );
};

export default AllProgrammingPage;
