export interface MovieDetails {
  imdbId: string;
  category: string;
  title: string;
  overview: string;
  releaseDate: string;
  poster: string;
  director: string;
  casts: string[];
  genres: string[];
  slug: string;
  publishedDate: Date;
  body: string;
}

export interface MovieCrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}
export interface MovieCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface MovieGenre {
  id: number;
  name: string;
}
