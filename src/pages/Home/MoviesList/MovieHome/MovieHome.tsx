import { TMovie } from "../../../../data/data";
import { Link } from "react-router-dom";
import "./MovieHome.css";
interface MovieProps {
  movie: TMovie;
}
export function MovieHome({ movie }: MovieProps) {
  return (
    <div className="mov-home-slider">
      <div className="mov-home-box">
        <div className="mov-home-poster">
          <a href={`/movie/${movie.kinopoiskId}`}>
            <img src={movie.posterUrlPreview} alt={movie.nameRu} />
          </a>
        </div>
        <div className="mov-home-details">
          <p>{movie.nameRu}</p>
          Рейтинг: {movie.ratingKinopoisk}
          <Link
            className="mov-home-btn"
            to={{ pathname: `/movie/${movie.kinopoiskId}` }}
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
