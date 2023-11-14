import { useEffect, useState } from "react";
import axios from "axios";

import { Movie } from "./Movie";
import { TMovie, TMovieResponseData } from "../data/data";

export function NewMovies() {
  const [movies, setMovies] = useState<TMovieResponseData | undefined>(undefined);


  async function getMovies() {
    const response = await axios.get<TMovieResponseData>(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=1&genres=1&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1",
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
    <div className="hit-movies">
      <p>Новые фильмы</p>

      {movies && movies?.items.map((movie: TMovie) => (
        <Movie movie={movie} key={movie.kinopoiskId} />
      ))}
    </div>
  );
}
