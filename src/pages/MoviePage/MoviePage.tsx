import { useEffect, useState } from "react";
import { TFilm } from "../../data/data";
import { useParams } from "react-router-dom";
import { getFilm } from "../../data/FilmService";
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
    <div className="movie-page">
      <div
        className="movie-background"
        style={{
          backgroundImage: `url(${film?.posterUrl})`,
        }}
      ></div>
      <div className="movie-body">
        <div className="movie-poster-box">
          <img
            className="movie-poster"
            src={film?.posterUrl}
            alt={film?.nameRu}
          />
        </div>
        <div className="movie-trailer">
          <div className="movie-trailer-title">
            Здесь должен быть трейлер {film?.nameRu}: {film?.site}
          </div>
          <div className="movie-trailer-box"> {film?.webUrl} </div>
        </div>
        <div className="movie-details-box">
          <div className="movie-details">
            <div>{film?.nameRu}</div>
            <div>Рейтинг Кинопоиска: {film?.ratingKinopoisk}</div>
            <div>Рейтинг IMDb: {film?.ratingImdb}</div>
            <div>Год: {film?.year}</div>
            <div>Страна: {film?.countries[0].country}</div>
            <div>Жанр: {film?.genres[0].genre}</div>
            <div>Продолжительность: {film?.filmLength} мин.</div>
          </div>
          <div className="movie-description">
            <div className="movie-description-title">О фильме</div>
            <div className="movie-description-text">{film?.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
