import { useEffect, useState } from "react";
import { TFilm } from "../data/data";
import { useParams } from "react-router-dom";
import { getFilm } from "../data/FilmService";
import "./MoviePage.css";

export function MoviePage() {
  const [film, setFilm] = useState<TFilm | undefined>(undefined);
  const { kinopoiskId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const filmData = await getFilm(kinopoiskId);
      setFilm(filmData);
    }

    fetchData();
  }, [kinopoiskId]);

  return (
    <div className="movie-body">
      <img className="movie-poster" src={film?.posterUrl} alt={film?.nameRu} />
      <div className="movie-trailer">
        <span className="movie-trailer-title">Здесь должен быть трейлер</span>
      </div>
      <div className="movie-details">
        <span>{film?.nameRu}</span>
        <span>Рейтинг Кинопоиска: {film?.ratingKinopoisk}</span>
        <span>Рейтинг IMDb: {film?.ratingImdb}</span>
        <span>Год: {film?.year}</span>
        <span>Страна: {film?.countries[0].country}</span>
        <span>Жанр: {film?.genres[0].genre}</span>
        <span>Продолжительность: {film?.filmLength} мин.</span>
      </div>
      <div className="movie-description">
        <span className="movie-description-title">О фильме</span>
        <span className="movie-description-text">{film?.description}</span>
      </div>
      <div
        className="movie-background"
        style={{
          backgroundImage: `url(${film?.posterUrl})`,
        }}
      ></div>
    </div>
  );
}
