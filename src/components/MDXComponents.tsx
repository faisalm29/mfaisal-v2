import { ComponentProps } from "react";
import { CodeBlock } from "./mdx/CodeBlock";

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string;
};

export const MDXComponents = {
  h2: ({ ...props }) => {
    return <h2 {...props} className="text-xl font-bold text-blue-600" />;
  },
  h3: ({ ...props }) => {
    return <h3 {...props} className="text-lg font-bold text-green-600" />;
  },
  pre: (props: ComponentProps<"pre">) => <CodeBlock {...props} />,
  code: ({ children, ...props }: CodeProps) => {
    if (props["data-language"]) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="bg-muted/60 dark:bg-muted/40 text-foreground/90 rounded-md px-1.5 py-0.5 font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    );
  },
};
