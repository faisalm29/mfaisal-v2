import {
  Profile,
  TopTracks,
  BlogStacks,
  Contacts,
} from "@/components/sections";
import { PageContainer } from "@/components/PageContainer";

const AboutPage = () => {
  return (
    <PageContainer>
      <div>
        <h1>About</h1>
        <p className="text-muted-foreground">
          About me, this blog, and anything related.
        </p>
      </div>
      <Profile />
      <Contacts />
      <TopTracks />
      <BlogStacks />
    </PageContainer>
  );
};

export default AboutPage;
