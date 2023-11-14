import { TMovie } from "../data/data";

interface MovieProps {
  movie: TMovie;
}
export function Movie({ movie }: MovieProps) {
  return (
    <div>
      <div className="movie">
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameRu}
        />
      </div>
      <p>{movie.nameRu}</p>
      <div>Рейтинг Кинопоиска: {movie.ratingKinopoisk}</div>
    </div>
  );
}
