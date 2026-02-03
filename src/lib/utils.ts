import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Blog } from "content-collections";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const sortDesc = (list: Blog[]) => {
  return list.sort(
    (a, b) =>
      new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf(),
  );
};
