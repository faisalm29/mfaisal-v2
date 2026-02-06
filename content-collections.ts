import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { remarkCodeMeta } from "@/lib/remark-code-meta";

const posts = defineCollection({
  name: "generalPost",
  directory: "content",
  include: "**/general/*.mdx",
  schema: z.object({
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
  }),
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

export default defineConfig({
  collections: [posts],
});
