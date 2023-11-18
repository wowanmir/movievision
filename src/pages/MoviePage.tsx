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
        <img src={film?.posterUrl} alt={film?.nameRu} />
        <div className="movie-container">
          <div className="movie-poster"></div>
          <div className="movie-details">
            <p>{film?.nameRu}</p>
            Рейтинг: {film?.ratingKinopoisk}
          </div>
          <span className="movie-description">{film?.description}</span>
        </div>
      <div
        className="movie-background"
        style={{
          backgroundImage: `url(${film?.posterUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          opacity: "0.05",
        }}
      >
      </div>
    </div>
  );
}
