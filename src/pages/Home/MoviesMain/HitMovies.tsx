import { useEffect, useState } from "react";
import { TMovie, TMovieResponseData } from "../../../data/data";
import { HitMoviesService } from "../../../data/movie.service";
import { Movie } from "./Movie/Movie";
import "./HitMovies.css";

export const HitMovies = () => {
  const [movies, setMovies] = useState<TMovieResponseData | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      const response = await HitMoviesService.getAllFilms();
      setMovies(response);
      setLoading(false);
    }
    getMovies();
  }, []);

  return (
    <div className="main-slider">
      <p className="title-slider">Высокий рейтинг</p>
      {loading && <div className="loader">Загрузка...</div>}
      <div className="movies-slider">
        {movies?.items.length > 3 &&
          movies.items.map((movie: TMovie) => (
            <Movie movie={movie} key={movie.kinopoiskId} />
          ))}
      </div>
    </div>
  );
};
