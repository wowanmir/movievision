import { TMovie } from "../../data/data";
import { Link } from "react-router-dom";
import "../../components/Movie/Movie.css";
interface MovieProps {
  movie: TMovie;
}
export function Animation({ movie }: MovieProps) {
  return (
    <div className="movie-slider">
      <div className="poster">
        <a href={`/animation/${movie.kinopoiskId}`}>
          <img src={movie.posterUrlPreview} alt={movie.nameRu} />
        </a>
      </div>
      <div className="details">
        <p>{movie.nameRu}</p>
        Рейтинг: {movie.ratingKinopoisk}
      </div>
      <Link
        className="movie-btn"
        to={{ pathname: `/animation/${movie.kinopoiskId}` }}
      >
        Подробнее
      </Link>
    </div>
  );
}
