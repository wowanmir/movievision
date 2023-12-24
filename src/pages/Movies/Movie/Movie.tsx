import { TMovie } from "../../../data/data";
import { Link } from "react-router-dom";
import "./Movie.css";
interface MovieProps {
  movie: TMovie;
}
export function Movie({ movie }: MovieProps) {
  return (
    <div className="movie-slider">
      <div className="movie-box">
        <div className="movie-poster">
          <a href={`/movie/${movie.kinopoiskId}`}>
            <img src={movie.posterUrlPreview} alt={movie.nameRu} />
          </a>
        </div>
        <div className="movie-details">
          <p>{movie.nameRu}</p>
          Рейтинг: {movie.ratingKinopoisk}
          <Link
            className="movie-btn"
            to={{ pathname: `/movie/${movie.kinopoiskId}` }}
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
