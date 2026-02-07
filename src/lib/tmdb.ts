import { allMovieReviewPosts } from "content-collections";
import { Movie, TMDBMovieCredits, TMDBMovieDetails } from "./tmdb.types";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

const getMovieDetails = async (id: string): Promise<TMDBMovieDetails> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`,
  );

  if (!res.ok) throw new Error(`Failed to fetch movie details for id: ${id}`);

  const data: TMDBMovieDetails = await res.json();

  return data;
};

const getMovieCredits = async (id: string): Promise<TMDBMovieCredits> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}`,
  );

  if (!res.ok) throw new Error(`Failed to fetch movie credits for id: ${id}`);

  const data: TMDBMovieCredits = await res.json();

  return data;
};

const getLocalMovieData = (id: string) => {
  const data = allMovieReviewPosts.find((movie) => movie.id === id);

  if (!data)
    throw new Error(`Failed to get movie local movie data for id: ${id}`);

  return data;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const movieDetais = await getMovieDetails(id);
  const movieCredits = await getMovieCredits(id);
  const movieLocalData = getLocalMovieData(id);

  return {
    id: Number(id),
    movie_details: movieDetais,
    movie_credits: movieCredits,
    movie_local_data: movieLocalData,
  };
};

export const getMovies = async (ids: string[]): Promise<Movie[]> => {
  return Promise.all(
    ids.map(async (id) => {
      const movieDetails = await getMovieDetails(id);
      const movieCredits = await getMovieCredits(id);
      const movieLocalData = getLocalMovieData(id);

      return {
        id: Number(id),
        movie_details: movieDetails,
        movie_credits: movieCredits,
        movie_local_data: movieLocalData,
      };
    }),
  );
};
