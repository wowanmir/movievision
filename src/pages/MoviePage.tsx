import { useEffect, useState } from "react";
import axios from "axios";
import { TFilms } from "../data/data";
interface FilmProps {
  film: TFilms;
}

export function MoviePage({ film }: FilmProps) {

  const [movies, setMovies] = useState<TFilms | undefined>(
    undefined
  );

  async function getMovies() {
    const response = await axios.get<TFilms>(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films",
      {
        headers: {
          "X-API-KEY": "d4fd78fe-13ed-4b1b-af4e-1b0c7e2e64b1",
          "Content-Type": "application/json",
        },
      }
    );
    setMovies(response.data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-slider">
      <div className="poster">
        <img src={film.posterUrlPreview} alt={film.nameRu} />
      </div>
      <div className="details">
        <p>{film.nameRu}</p>
        Рейтинг: {film.ratingKinopoisk}
      </div>
    </div>
  );
}