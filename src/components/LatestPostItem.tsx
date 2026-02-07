import { Item, ItemContent, ItemDescription, ItemTitle } from "./ui/item";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { normalizeCategory } from "@/lib/utils";

interface LatesPost {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
}

const LatestPostItem = ({ post }: { post: LatesPost }) => {
  const { slug, title, category, publishedAt } = post;
  return (
    <Item asChild>
      <Link href={`/${category}/${slug}`}>
        <ItemContent>
          <ItemTitle>
            <h3>{title}</h3>
          </ItemTitle>
          <ItemDescription className="capitalize">
            {normalizeCategory(category)}
          </ItemDescription>
        </ItemContent>
        <ItemContent>
          <ItemDescription>
            <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          </ItemDescription>
        </ItemContent>
      </Link>
    </Item>
  );
};

export { LatestPostItem };
