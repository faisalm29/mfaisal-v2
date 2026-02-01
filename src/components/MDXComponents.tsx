export const MDXComponents = {
  h2: ({ ...props }) => {
    return <h2 {...props} className="text-xl font-bold text-blue-600" />;
  },
  h3: ({ ...props }) => {
    return <h3 {...props} className="text-lg font-bold text-green-600" />;
  },
};
