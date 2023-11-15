import { TMovie } from "../data/data";
import "./Content";
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
        <p className="details-title">{movie.nameRu}</p>
        Рейтинг: {movie.ratingKinopoisk}
      </div>
    </div>
  );
}
