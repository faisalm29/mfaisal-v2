import Link from "next/link";

const ViewAllMovieButton = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="border-border group block h-full rounded-md border border-dashed p-2 transition-all duration-300 ease-in-out"
    >
      <div className="bg-muted/50 text-muted-foreground group-hover:bg-muted group-hover:text-foreground group justify flex h-full items-center justify-center rounded-sm p-2 text-sm transition-all duration-300 ease-in-out">
        View all
      </div>
    </Link>
  );
};

export { ViewAllMovieButton };
