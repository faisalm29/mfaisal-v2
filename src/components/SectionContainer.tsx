import React from "react";
import { cn } from "@/lib/utils";

const SectionContainer = ({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section {...props} className={cn("flex flex-col space-y-4", className)}>
      {children}
    </section>
  );
};

export { SectionContainer };
