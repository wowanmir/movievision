import { useEffect, useState } from "react";
import { TMovie, TMovieResponseData } from "../../../data/data";
import { NewMoviesService } from "../../../data/movie.service";
import { Movie } from "./Movie/Movie";
import "./SettingsMovie.css";

export function NewMovies() {
  const [movies, setMovies] = useState<TMovieResponseData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      const response = await NewMoviesService.getAllFilms();
      setMovies(response);
      setLoading(false);
    }
    getMovies();
  }, []);

  return (
    <div className="main-slider">
      <p className="title-slider">Новые фильмы</p>
      {loading && <div className="loader">Загрузка...</div>}
      <div className="movies-slider">
        {movies &&
          movies.items &&
          movies?.items.length > 3 &&
          movies?.items.map((movie: TMovie) => (
            <Movie movie={movie} key={movie.kinopoiskId} />
          ))}
      </div>
    </div>
  );
}
