import Select, { OnChangeValue } from "react-select";
import { useEffect, useState } from "react";
import { Movie } from "./Movie/Movie";
import { IOptions, TMovie, TMovieResponseData } from "../../data/data";
import {
  getCountries,
  getGenres,
  getRatings,
  getYears,
} from "../../components/category/category";
import { CategoryService } from "../../data/movie.service";
import makeAnimated from "react-select/animated";
import "./Movies.css";
import "./select.scss";

export const Movies = () => {
  const countries = getCountries();
  const genres = getGenres();
  const ratings = getRatings();
  const years = getYears();
  const [currentCategory, setCurrentCategory] = useState<any>("");
  const [movies, setMovies] = useState<TMovieResponseData>();
  const animatedComponents = makeAnimated();

  async function getMovies() {
    const response = await CategoryService.getCategory();
    setMovies(response.data);
  }
  const getCountriesCategory = () => {
    return currentCategory
      ? countries.filter((c) => currentCategory.indexOf(c.value) >= 0)
      : [];
  };
  const onChange = (newValue: OnChangeValue<IOptions, boolean>) => {
    setCurrentCategory((newValue as IOptions[]).map((v) => v.value));
  };

  const getGenresCategory = () => {
    return currentCategory
      ? genres.filter((c) => currentCategory.indexOf(c.value) >= 0)
      : [];
  };
  const getRatingsCategory = () => {
    return currentCategory
      ? ratings.filter((c) => currentCategory.indexOf(c.value) >= 0)
      : [];
  };
  const getYearsCategory = () => {
    return currentCategory
      ? years.filter((c) => currentCategory.indexOf(c.value) >= 0)
      : [];
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies-container">
      <div className="filter">
        <Select
          classNamePrefix="custom-select"
          onChange={onChange}
          value={getCountriesCategory()}
          options={countries}
          placeholder="Страна"
          isMulti
          components={animatedComponents}
        />
        <Select
          classNamePrefix="custom-select"
          onChange={onChange}
          value={getGenresCategory()}
          options={genres}
          placeholder="Жанр"
          isMulti
          components={animatedComponents}
        />
        <Select
          classNamePrefix="custom-select"
          onChange={onChange}
          value={getRatingsCategory()}
          options={ratings}
          placeholder="Рейтинг"
          isMulti
          components={animatedComponents}
        />
        <Select
          classNamePrefix="custom-select"
          onChange={onChange}
          value={getYearsCategory()}
          options={years}
          placeholder="Год"
          isMulti
          components={animatedComponents}
        />
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
