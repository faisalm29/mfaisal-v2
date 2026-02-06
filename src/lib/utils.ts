import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Blog } from "content-collections";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const sortPosts = (posts: Blog[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf(),
  );
};
