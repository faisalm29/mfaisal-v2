import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { remarkCodeMeta } from "@/lib/remark-code-meta";

const postSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  category: z.string(),
  publishedAt: z.string(),
  content: z.string(),
  thumbnail: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
});

const generalPost = defineCollection({
  name: "generalPost",
  directory: "content",
  include: "general/*.mdx",
  schema: postSchema,
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkCodeMeta],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
          },
        ],
      ],
    });
    const slug = document._meta.fileName.replace(/\.mdx$/, "");
    const readTime = readingTime(document.content).text;
    return {
      ...document,
      slug,
      readTime,
      mdx,
    };
  },
});

const programmingPost = defineCollection({
  name: "programmingPost",
  directory: "content",
  include: "programming/*.mdx",
  schema: postSchema,
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkCodeMeta],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
          },
        ],
      ],
    });
    const slug = document._meta.fileName.replace(/\.mdx$/, "");
    const readTime = readingTime(document.content).text;
    return {
      ...document,
      slug,
      readTime,
      mdx,
    };
  },
});

const movieReviewPost = defineCollection({
  name: "movieReviewPost",
  directory: "content",
  include: "movies/*.mdx",
  schema: z.object({
    category: z.string(),
    id: z.string(),
    publishedAt: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
          },
        ],
      ],
    });
    const slug = document._meta.fileName.replace(/\.mdx$/, "");
    return {
      ...document,
      slug,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [generalPost, programmingPost, movieReviewPost],
});
