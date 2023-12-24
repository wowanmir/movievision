import { TMovie } from "../../../data/data";
import { Link } from "react-router-dom";
import "./Animation.css";
interface MovieProps {
  movie: TMovie;
}
export function Animation({ movie }: MovieProps) {
  return (
    <div className="anim-slider">
      <div className="anim-box">
        <div className="anim-poster">
          <a href={`/animation/${movie.kinopoiskId}`}>
            <img
              src={movie.posterUrlPreview}
              alt={movie.nameRu}
              loading="lazy"
            />
          </a>
        </div>
        <div className="anim-details">
          <p>{movie.nameRu}</p>
          Рейтинг: {movie.ratingKinopoisk}
          <Link
            className="anim-btn"
            to={{ pathname: `/animation/${movie.kinopoiskId}` }}
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
