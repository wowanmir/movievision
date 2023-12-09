import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "./Movie/Movie";
import { TMovie, TMovieResponseData } from "../../../data/data";
import { API_KEY, API_SLIDER_2 } from "../../../data/api";

export function NewMovies() {
  const [movies, setMovies] = useState<TMovieResponseData | undefined>(
    undefined
  );

  async function getMovies() {
    const response = await axios.get<TMovieResponseData>(API_SLIDER_2, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });
    setMovies(response.data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="main-slider">
      <p className="title-slider">Новые фильмы</p>
      <div className="movies-slider">
        {movies &&
          movies.items.map((movie: TMovie) => (
            <Movie movie={movie} key={movie.kinopoiskId} />
          ))}
      </div>
    </div>
  );
}
