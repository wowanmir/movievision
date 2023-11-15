import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "./Movie";
import { TMovie, TMovieResponseData } from "../data/data";

export const HitMovies = () => {
  const [movies, setMovies] = useState<TMovieResponseData | undefined>(
    undefined
  );

  async function getMovies() {
    const response = await axios.get<TMovieResponseData>(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films?&order=RATING&type=FILM&ratingFrom=08&ratingTo=10&yearFrom=1950&yearTo=2023",
      {
        headers: {
          "X-API-KEY": "d4fd78fe-13ed-4b1b-af4e-1b0c7e2e64b1",
          "Content-Type": "application/json",
        },
      }
    );
    setMovies(response.data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="main-slider">
      <p className="title-slider">Высокий рейтинг</p>
      <div className="movies-slider">
        {movies &&
          movies.items
            .slice(0, 5)
            .map((movie: TMovie) => (
              <Movie movie={movie} key={movie.kinopoiskId} />
            ))}
      </div>
    </div>
  );
};
