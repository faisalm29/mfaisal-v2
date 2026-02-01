import { allBlogs } from "content-collections";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { MDXComponents } from "@/components/MDXComponents";
import Image from "next/image";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) return notFound();

  return (
    <article className="prose">
      <h1 className="font-thin">{post.title}</h1>
      <time>{post.publishedAt}</time>
      <p>{post.readTime}</p>
      <p>{post.excerpt}</p>
      {/*visit this for responsive image documentation https://nextjs.org/docs/app/api-reference/components/image#examples */}
      {post.thumbnail && (
        <Image
          src={post.thumbnail.src}
          alt={post.thumbnail.alt}
          width={300}
          height={200}
        />
      )}
      <MDXContent code={post.mdx} components={MDXComponents} />
    </article>
  );
}
