import { TFilm } from "../data/data";

type FilmProps = {
  film: TFilm
};
export function Film({ film }: FilmProps) {
  return (
    <div className="movie-slider">
      Film
      <div className="poster">
        <img src={film.posterUrl} alt={film.nameRu} />
      </div>
      <div className="details">
        <p>{film.nameRu}</p>
        Рейтинг: {film.ratingKinopoisk}
      </div>
    </div>
  );
}
