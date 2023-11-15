import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "./Movie";
import { TMovie, TMovieResponseData } from "../data/data";

export const RecommendedMovies = () => {
  const [movies, setMovies] = useState<TMovieResponseData | undefined>(
    undefined
  );

  async function getMovies() {
    const response = await axios.get<TMovieResponseData>(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=1&genres=1&type=FILM&ratingFrom=06&ratingTo=10&yearFrom=2000&yearTo=2023",
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
      <p className="title-slider">Рекомендуемые фильмы</p>
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
