import { TMovie } from "../../data/data";
import { Link } from "react-router-dom";
import "./Movie.css";
interface MovieProps {
  movie: TMovie;
}
export function Movie({ movie }: MovieProps) {
  return (
    <div className="movie-slider">
      <div className="poster">
        <img src={movie.posterUrlPreview} alt={movie.nameRu} />
      </div>
      <div className="details">
        <p>{movie.nameRu}</p>
        Рейтинг: {movie.ratingKinopoisk}
      </div>
      <Link
        className="movie-btn"
        to={{ pathname: `/movie/${movie.kinopoiskId}` }}
      >
        Подробнее
      </Link>
    </div>
  );
}
