import {
  Profile,
  TopTracks,
  BlogStacks,
  Contacts,
} from "@/components/sections";
import { PageContainer } from "@/components/PageContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me, this blog, and anything related.",
  openGraph: {
    title: "About",
    description: "About me, this blog, and anything related.",
  },
};

const AboutPage = () => {
  return (
    <PageContainer>
      <div>
        <h1 className="font-display text-2xl font-medium">About</h1>
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
