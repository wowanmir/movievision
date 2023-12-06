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
    <div>
      <div
        className="movie-background"
        style={{
          backgroundImage: `url(${film?.posterUrl})`,
        }}
      ></div>
      <div className="movie-body">
        <div className="movie-trailer-box">
          <div className="movie-poster-box">
            <img
              className="movie-poster"
              src={film?.posterUrl}
              alt={film?.nameRu}
            />
          </div>
          <div className="video-container">
            <video
              className="video-player"
              src={film?.posterUrl}
              id="video-player"
              preload="metadata"
            ></video>
            <div className="video-hud">
              <div
                className="video-hud__element video-hud__action video-hud__action_play"
                id="video-hud__action"
              ></div>
              <div
                className="video-hud__element video-hud__curr-time"
                id="video-hud__curr-time"
              >
                00:00
              </div>
              <progress
                value="0"
                max="100"
                className="video-hud__element video-hud__progress-bar"
                id="video-hud__progress-bar"
              ></progress>
              <div
                className="video-hud__element video-hud__duration"
                id="video-hud__duration"
              >
                00:00
              </div>
              <div
                className="video-hud__element video-hud__mute video-hud__mute_false"
                id="video-hud__mute"
              ></div>
              <input
                type="range"
                value="100"
                max="100"
                title="Громкость"
                className="video-hud__element video-hud__volume"
                id="video-hud__volume"
              ></input>
              <select
                title="Скорость"
                className="video-hud__element video-hud__speed"
                id="video-hud__speed"
              >
                <option value="25">x0.25</option>
                <option value="50">x0.50</option>
                <option value="75">x0.75</option>
                <option value="100" selected>
                  x1.00
                </option>
                <option value="125">x1.25</option>
                <option value="150">x1.50</option>
                <option value="175">x1.75</option>
                <option value="200">x2.00</option>
              </select>
            </div>
          </div>
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
