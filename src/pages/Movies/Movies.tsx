import "./Movies.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../../components/movie/Movie";
import { TMovie, TMovieResponseData } from "../../data/data";
import { API_KEY } from "../../data/api";

export const Movies = () => {
  const [movies, setMovies] = useState<TMovieResponseData | undefined>(
    undefined
  );

  async function getMovies() {
    const response = await axios.get<TMovieResponseData>(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=1&genres=1&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000",
      {
        headers: {
          "X-API-KEY": API_KEY,
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
    <div className="movies-container">
      <div className="filter">
        <span className="title-filter">Страна = countries</span>
        <span className="title-filter">Жанр = genres</span>
        <span className="title-filter">Сортировка = order</span>
        <div className="title-filter">
          <span>Рейтинг от = ratingFrom</span>
          <br />
          <span>Рейтинг до = ratingTo</span>
        </div>
        <div className="title-filter">
          <span>Год от = yearFrom</span>
          <br />
          <span>Год до = yearTo</span>
        </div>
      </div>
      <div className="movies-page">
        <div className="movies-main">
          {movies &&
            movies.items
              .slice(0, 7)
              .map((movie: TMovie) => (
                <Movie movie={movie} key={movie.kinopoiskId} />
              ))}
        </div>
      </div>
    </div>
  );
};
