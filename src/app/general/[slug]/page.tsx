import { allGeneralPosts } from "content-collections";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { MDXComponents } from "@/components/MDXComponents";
import ExportedImage from "next-image-export-optimizer";
import { formatDate } from "@/lib/utils";
import { Calendar, Timer } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return allGeneralPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allGeneralPosts.find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.thumbnail?.src || "/opengraph-image.jpg",
          alt: post.thumbnail?.alt || `${post.title}'s cover thumbnail image.`,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Faisal M."],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      site: "@hrrblealtruist",
      creator: "@hrrblealtruist",
      images: [
        {
          url: post.thumbnail?.src || "/opengraph-image.jpg",
          alt: post.thumbnail?.alt || `${post.title}'s cover thumbnail image.`,
          username: "@hrrblealtruist",
        },
      ],
    },
  };
}

export default async function GeneralPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allGeneralPosts.find((post) => post.slug === slug);

  if (!post) return notFound();

  return (
    <article className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-8">
        {post.thumbnail && (
          <div className="relative aspect-2/1 w-full overflow-hidden rounded-md">
            <ExportedImage
              src={post.thumbnail.src}
              alt={post.thumbnail.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-muted-foreground" />
            <time
              dateTime={post.publishedAt}
              className="text-muted-foreground text-sm"
            >
              {formatDate(post.publishedAt)}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Timer size={16} className="text-muted-foreground" />
            <p className="text-muted-foreground text-sm">{post.readTime}</p>
          </div>
        </div>
        <h1 className="text-2xl font-medium">{post.title}</h1>
      </div>
      <div className="prose text-muted-foreground dark:prose-invert max-w-full leading-relaxed text-pretty">
        <MDXContent code={post.mdx} components={MDXComponents} />
      </div>
    </article>
  );
}
