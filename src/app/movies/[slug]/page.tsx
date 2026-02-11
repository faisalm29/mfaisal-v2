import { allMovieReviewPosts } from "content-collections";
import { getMovieById } from "@/lib/tmdb";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { MDXComponents } from "@/components/MDXComponents";
import ExportedImage from "next-image-export-optimizer";
import { formatDate, getYear } from "@/lib/utils";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return allMovieReviewPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allMovieReviewPosts.find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  let movie;

  try {
    movie = await getMovieById(post.id);
  } catch (e) {
    console.error(`Failed to fetch movie data for id ${post.id}:`, e);
    return;
  }

  return {
    title: `${movie.movie_details.title} Movie Review`,
    description: movie.movie_details.overview,
    openGraph: {
      title: movie.movie_details.title,
      description: movie.movie_details.overview,
      images: [
        {
          url: movie.movie_details.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.movie_details.poster_path}`
            : "/og-image.jpg",
          alt: movie.movie_details.poster_path
            ? `${movie.movie_details.title}'s movie poster`
            : `${movie.movie_details.title}'s movie poster`,
        },
      ],
      type: "article",
      publishedTime: movie.movie_local_data.publishedAt,
      authors: ["Faisal M."],
    },
    twitter: {
      card: "summary_large_image",
      title: movie.movie_details.title,
      description: movie.movie_details.overview,
      site: "@hrrblealtruist",
      creator: "@hrrblealtruist",
      images: [
        {
          url: movie.movie_details.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.movie_details.poster_path}`
            : "/og-image.jpg",
          alt: movie.movie_details.poster_path
            ? `${movie.movie_details.title}'s movie poster`
            : `${movie.movie_details.title}'s movie poster`,
        },
      ],
    },
  };
}

export default async function MovieReviewPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const localMovieData = allMovieReviewPosts.find(
    (movie) => movie.slug === slug,
  );

  if (!localMovieData) return notFound();

  let movie;

  try {
    movie = await getMovieById(localMovieData.id);
  } catch (e) {
    console.error(`Failed to fetch movie data for id ${localMovieData.id}:`, e);
    return notFound();
  }

  const { id, movie_details, movie_credits, movie_local_data } = movie;
  const directors = movie_credits.crew
    .filter((crew) => crew.job === "Director")
    .map((crew) => crew.name);
  const casts = movie_credits.cast.slice(0, 5).map((cast) => cast.name);
  const genres = movie_details.genres.map((genre) => genre.name);

  return (
    <article className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-8">
        <div className="border-border bg-accent/50 rounded-md border p-4">
          <div className="flex flex-col space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {movie_details.poster_path && (
                <ExportedImage
                  src={`https://image.tmdb.org/t/p/w500${movie_details.poster_path}`}
                  alt={`${movie_details.title}'s movie poster`}
                  sizes="100vw"
                  width={250}
                  height={500}
                  className="mx-0 h-auto w-full rounded-md"
                />
              )}
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="font-medium">Director(s)</p>
                  <p className="text-muted-foreground">
                    {directors.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Casts</p>
                  <p className="text-muted-foreground">{casts.join(", ")}</p>
                </div>
                <div>
                  <p className="font-medium">Release year</p>
                  <time
                    dateTime={movie_details.release_date}
                    className="text-muted-foreground"
                  >
                    {getYear(movie_details.release_date)}
                  </time>
                </div>
                <div>
                  <p className="font-medium">Genre</p>
                  <p className="text-muted-foreground">{genres.join(", ")}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium">Overview</p>
              <p className="text-muted-foreground">{movie_details.overview}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-muted-foreground" />
          <time
            dateTime={localMovieData.publishedAt}
            className="text-muted-foreground text-sm"
          >
            {formatDate(localMovieData.publishedAt)}
          </time>
        </div>

        <h1 className="text-2xl font-medium">{movie_details.title}</h1>
      </div>
      <div className="prose text-muted-foreground dark:prose-invert max-w-full leading-relaxed text-pretty">
        <MDXContent code={localMovieData.mdx} components={MDXComponents} />
      </div>
    </article>
  );
}
