import { LatestPosts } from "@/components/sections";
import { Summary } from "@/components/sections";

export default function Home() {
  return (
    <main className="flex flex-col space-y-8">
      <Summary />
      <LatestPosts />
    </main>
  );
}
