import { TMovie, TMovieResponseData } from "../../../data/data";
import { MovieHome } from "./MovieHome";
import "./MoviesList.css";

export const MoviesList = ({
  loading,
  movies,
}: {
  loading: boolean;
  movies: TMovieResponseData;
}) => {
  return (
    <div className="main-slider">
      <p className="title-slider">Высокий рейтинг</p>
      {loading && <div> Загрузка...</div>}
      <div className="movies-slider">
        {movies &&
          movies.items &&
          movies?.items.length > 3 &&
          movies?.items.map((movie: TMovie) => (
            <MovieHome movie={movie} key={movie.kinopoiskId} />
          ))}
      </div>
    </div>
  );
};
