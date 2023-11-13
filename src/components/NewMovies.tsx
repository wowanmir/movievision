import { Movie } from "./Movie";
import axios from "axios";
import { useEffect, useState } from "react";
import { IMovie } from "../data/data";
import "./HitMovies.css";
export function NewMovies() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  async function getMovies() {
    const res = await axios.get<IMovie[]>(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1",
      {
        headers: {
          "X-API-KEY": "d4fd78fe-13ed-4b1b-af4e-1b0c7e2e64b1",
          "Content-Type": "application/json",
        },
      }
    );
    setMovies(res.data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="hit-movies">
      <p>Новые фильмы</p>
      <div className="hit-movie-each">
        {movies.items?.map((movies) => (
          <Movie movie={movies} key={movies.kinopoiskId} />
        ))}
      </div>
    </div>
  );
}
