import Select from "react-select";
import { useEffect, useState } from "react";
import { Serial } from "./Serial/Serial";
import { TMovie, TMovieResponseData } from "../../data/data";
import {
  getCountries,
  getGenres,
  getRatings,
  getYears,
} from "../../components/category/category";
import { CategoryService } from "../../data/movie.service";
import "../Movies/Movies.css";

export const Serials = () => {
  const countries = getCountries();
  const genres = getGenres();
  const ratings = getRatings();
  const years = getYears();
  const [movies, setMovies] = useState<TMovieResponseData>();
  const [currentCategory, setCurrentCategory] = useState("");

  async function getMovies() {
    const response = await CategoryService.getCategory();
    setMovies(response.data);
  }
  const getCountriesCategory = () => {
    return currentCategory
      ? countries.find((a) => a.value === currentCategory)
      : "";
  };
  const onChange = (newValue: any) => {
    setCurrentCategory(newValue.value);
  };
  const getGenresCategory = () => {
    return currentCategory
      ? genres.find((c) => c.value === currentCategory)
      : "";
  };
  const getRatingsCategory = () => {
    return currentCategory
      ? ratings.find((c) => c.value === currentCategory)
      : "";
  };
  const getYearsCategory = () => {
    return currentCategory
      ? years.find((c) => c.value === currentCategory)
      : "";
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies-container">
      <div className="filter">
        <Select
          className="select"
          onChange={onChange}
          value={getCountriesCategory()}
          options={countries}
          placeholder="Страна"
        />
        <Select
          className="select"
          onChange={onChange}
          value={getGenresCategory()}
          options={genres}
          placeholder="Жанр"
        />
        <Select
          className="select"
          onChange={onChange}
          value={getRatingsCategory()}
          options={ratings}
          placeholder="Рейтинг"
        />
        <Select
          className="select"
          onChange={onChange}
          value={getYearsCategory()}
          options={years}
          placeholder="Год"
        />
      </div>
      <div className="movies-page">
        <div className="movies-main">
          {movies &&
            movies.items.map((movie: TMovie) => (
              <Serial movie={movie} key={movie.kinopoiskId} />
            ))}
        </div>
      </div>
    </div>
  );
};
