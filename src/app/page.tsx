import { Summary, LatestPosts } from "@/components/sections";
import { PageContainer } from "@/components/PageContainer";
import { getAccessToken } from "@/lib/spotify";

export default async function Home() {
  const token = await getAccessToken();
  console.log(token);
  return (
    <PageContainer>
      <Summary />
      <LatestPosts />
    </PageContainer>
  );
}
