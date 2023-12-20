import { TMovie, TMovieResponseData } from "../../../data/data";
import { Movie } from "../../../components/Movie/Movie";
import "../../../components/Movie/Movie.css";
import "./SettingsMovie.css";

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
};
