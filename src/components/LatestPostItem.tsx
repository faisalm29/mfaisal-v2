import Link from "next/link";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "./ui/item";
import type { Blog } from "content-collections";
import { formatDate, sortDesc } from "@/lib/utils";

const LatestPostItem = ({ post }: { post: Blog }) => {
  const { title, excerpt, slug, publishedAt } = post;
  return (
    <Item asChild variant="glass">
      <Link href={`/blog/${slug}`}>
        <ItemContent>
          <ItemTitle>
            <h3 className="text-base">{title}</h3>
          </ItemTitle>
          <ItemDescription>{excerpt}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <time
            dateTime={formatDate(publishedAt)}
            className="text-muted-foreground"
          >
            {formatDate(publishedAt)}
          </time>
        </ItemActions>
      </Link>
    </Item>
  );
};

export { LatestPostItem };
