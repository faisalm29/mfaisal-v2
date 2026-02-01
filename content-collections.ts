import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import { remarkCodeMeta } from "@/lib/remark-code-meta";

const posts = defineCollection({
  name: "blog",
  directory: "content",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.string(),
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
