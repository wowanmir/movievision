import Select from "react-select";
import { useEffect, useState } from "react";
import { Movie } from "../../Home/MoviesMain/Movie/Movie";
import { TMovie, TMovieResponseData } from "../../../data/data";
import { getCountries, getGenres, getRatings, getYears } from "./category";
import { CategoryService } from "../../../data/movie.service";
import "./Movies.css";

export const Movies = () => {
  const countries = getCountries();
  const genres = getGenres();
  const ratings = getRatings();
  const years = getYears();
  const [movies, setMovies] = useState<TMovieResponseData>(
  );

  async function getMovies() {
    const response = await CategoryService.getCategory();
    setMovies(response.data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies-container">
      <div className="filter">
        <div className="select-settings">
          <Select className="select" options={countries} placeholder="Страна" />
        </div>
        <div>
          <Select className="select" options={genres} placeholder="Жанр" />
        </div>
        <div>
          <Select className="select" options={ratings} placeholder="Рейтинг" />
        </div>
        <div>
          <Select className="select" options={years} placeholder="Год" />
        </div>
      </div>
      <div className="movies-page">
        <div className="movies-main">
          {movies &&
            movies.items.map((movie: TMovie) => (
              <Movie movie={movie} key={movie.kinopoiskId} />
            ))}
        </div>
      </div>
    </div>
  );
};
