import { IMovie } from "../data/data";

interface MovieProps {
  movie: IMovie;
}
export function Movie({ movie }: MovieProps) {
  return (
    <div>
      <div className="movie">
        <img
          src={movie.items[0].posterUrlPreview}
          alt={movie.items[0].nameRu}
        />
      </div>
      <p>{movie.items[0].nameRu}</p>
      <div>Рейтинг Кинопоиска: {movie.items[0].ratingKinopoisk}</div>
    </div>
  );
}
