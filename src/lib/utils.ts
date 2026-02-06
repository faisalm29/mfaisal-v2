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

export const convertMsToMinutes = (ms: number) => {
  const minutes = Math.floor(ms / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1_000);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
