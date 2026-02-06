import { SectionContainer } from "../SectionContainer";
import { MovieItem } from "../MovieItem";
import { ViewAllMovieButton } from "../ViewAllMovieButton";
import moviePoster from "../../../public/movie-poster.webp";

const movies = [
  {
    title: "Never Rarely Sometime Always",
    releasedDate: "2014",
    image: moviePoster,
  },
  {
    title: "Still Walking",
    releasedDate: "2021",
    image: moviePoster,
  },
  {
    title: "Our Little Sister",
    releasedDate: "2016",
    image: moviePoster,
  },
  {
    title: "The Wind Rises",
    releasedDate: "2013",
    image: moviePoster,
  },
  {
    title: "Like Father, Like Son",
    releasedDate: "2013",
    image: moviePoster,
  },
];

const MovieReviews = () => {
  return (
    <SectionContainer>
      <h1>Movie Reviews</h1>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {movies.map((movie) => (
          <li key={movie.title}>
            <MovieItem
              title={movie.title}
              releasedDate={movie.releasedDate}
              image={movie.image}
            />
          </li>
        ))}
        <li>
          <ViewAllMovieButton href="/movies" />
        </li>
      </ul>
    </SectionContainer>
  );
};

export { MovieReviews };
