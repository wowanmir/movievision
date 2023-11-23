import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../movie/Movie";
import { TMovie, TMovieResponseData } from "../../data/data";
import { API_KEY, API_SLIDER_1 } from "../../data/api";
import "./HitMovies.css";

export const HitMovies = () => {
  const [movies, setMovies] = useState<TMovieResponseData | undefined>(
    undefined
  );

  async function getMovies() {
    const response = await axios.get<TMovieResponseData>(API_SLIDER_1, {
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
