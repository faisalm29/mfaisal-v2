import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { GeneralPost } from "content-collections";

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

export const sortPosts = (posts: GeneralPost[]) => {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf(),
  );
};
