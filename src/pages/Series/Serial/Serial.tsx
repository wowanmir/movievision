import { TMovie } from "../../../data/data";
import { Link } from "react-router-dom";
import "./Serial.css";
interface MovieProps {
  movie: TMovie;
}
export function Serial({ movie }: MovieProps) {
  return (
    <div className="serial-slider">
      <div className="serial-box">
        <div className="serial-poster">
          <a href={`/serial/${movie.kinopoiskId}`}>
            <img
              src={movie.posterUrlPreview}
              alt={movie.nameRu}
              loading="lazy"
            />
          </a>
        </div>
        <div className="serial-details">
          <p>{movie.nameRu}</p>
          Рейтинг: {movie.ratingKinopoisk}
          <Link
            className="serial-btn"
            to={{ pathname: `/serial/${movie.kinopoiskId}` }}
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
