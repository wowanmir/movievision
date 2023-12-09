import { useEffect, useState } from "react";
import { Movie } from "./Movie/Movie";
import { TMovie, TMovieResponseData } from "../../../data/data";
import { RecMoviesService } from "../../../data/movie.service";

export const RecMovies = () => {
  const [movies, setMovies] = useState<TMovieResponseData | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      const response = await RecMoviesService.getAllFilms();
      setMovies(response);
      setLoading(false);
    }
    getMovies();
  }, []);

  return (
    <div className="main-slider">
      <p className="title-slider">Рекомендуемые фильмы</p>
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

<p className="title-slider">Рекомендуемые фильмы</p>;
