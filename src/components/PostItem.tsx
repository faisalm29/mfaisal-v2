import { Item, ItemContent, ItemDescription, ItemTitle } from "./ui/item";
import Link from "next/link";
import { GeneralPost } from "content-collections";
import { formatDate } from "@/lib/utils";

const PostItem = ({ post }: { post: GeneralPost }) => {
  const { title, excerpt, category, publishedAt, slug } = post;
  return (
    <Item asChild>
      <Link href={`/${category}/${slug}`}>
        <ItemContent>
          <ItemTitle>
            <h3>{title}</h3>
          </ItemTitle>
          <ItemDescription>{excerpt}</ItemDescription>
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

export { PostItem };
