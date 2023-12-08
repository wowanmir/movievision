import { useEffect, useState } from "react";
import Select from "react-select";
import { API_KEY } from "../../data/api";
import axios from "axios";
import { Movie } from "../../components/movie/Movie";
import { TMovie, TMovieResponseData } from "../../data/data";
import { getCountries, getGenres, getRatings, getYears } from "./category";
import "./Movies.css";

export const Movies = () => {
  const countries = getCountries();
  const genres = getGenres();
  const ratings = getRatings();
  const years = getYears();

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
        <div>
          Страна
          <Select className="select" options={countries} />
        </div>
        <div>
          Жанр
          <Select className="select" options={genres} />
        </div>
        <div>
          Рейтинг
          <Select className="select" options={ratings} />
        </div>
        <div>
          Год
          <Select className="select" options={years} />
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
