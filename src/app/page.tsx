import { Summary, LatestPosts } from "@/components/sections";
import { PageContainer } from "@/components/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <Summary />
      <LatestPosts />
    </PageContainer>
  );
}
