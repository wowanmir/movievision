import Select, { OnChangeValue } from "react-select";
import { useEffect, useState } from "react";
import makeAnimated from "react-select/animated";
import { Animation } from "./Animation/Animation";
import { AnimationsService } from "../../data/movie.service";
import { IOptions, TMovie, TMovieResponseData } from "../../data/data";
import {
  getCountries,
  getGenres,
  getRatings,
  getYears,
} from "../../components/category/category";
import "./Animations.css";
import "./anim-select.scss";

export const Animations = () => {
  const countries = getCountries();
  const genres = getGenres();
  const ratings = getRatings();
  const years = getYears();
  const [anims, setMovies] = useState<TMovieResponseData>();
  const animatedComponents = makeAnimated();

  async function getMovies() {
    const response = await AnimationsService.getCategory();
    setMovies(response.data);
  }
  const [currentCategoryCountries, setCurrentCategoryCountries] =
    useState<any>("");
  const getCountriesCategory = () => {
    return currentCategoryCountries
      ? countries.filter((c) => currentCategoryCountries.indexOf(c.value) >= 0)
      : [];
  };
  const onChangeCountries = (newValue: OnChangeValue<IOptions, boolean>) => {
    setCurrentCategoryCountries((newValue as IOptions[]).map((v) => v.value));
  };

  const [currentGenres, setCurrentGenres] = useState<any>("");
  const getGenresCategory = () => {
    return currentGenres
      ? genres.filter((c) => currentGenres.indexOf(c.value) >= 0)
      : [];
  };
  const onChangeGenres = (newValue: OnChangeValue<IOptions, boolean>) => {
    setCurrentGenres((newValue as IOptions[]).map((v) => v.value));
  };

  const [currentRatings, setCurrentRatings] = useState<any>("");
  const getRatingsCategory = () => {
    return currentRatings
      ? ratings.filter((c) => currentRatings.indexOf(c.value) >= 0)
      : [];
  };
  const onChangeRatings = (newValue: OnChangeValue<IOptions, boolean>) => {
    setCurrentRatings((newValue as IOptions[]).map((v) => v.value));
  };

  const [currentYears, setCurrentYears] = useState<any>("");
  const getYearsCategory = () => {
    return currentYears
      ? years.filter((c) => currentYears.indexOf(c.value) >= 0)
      : [];
  };
  const onChangeYears = (newValue: OnChangeValue<IOptions, boolean>) => {
    setCurrentYears((newValue as IOptions[]).map((v) => v.value));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="anims-container">
      <div className="anims-filter">
        <Select
          classNamePrefix="custom-select"
          onChange={onChangeCountries}
          value={getCountriesCategory()}
          options={countries}
          placeholder="Страна"
          isMulti
          components={animatedComponents}
        />
        <Select
          classNamePrefix="custom-select"
          onChange={onChangeGenres}
          value={getGenresCategory()}
          options={genres}
          placeholder="Жанр"
          isMulti
          components={animatedComponents}
        />
        <Select
          classNamePrefix="custom-select"
          onChange={onChangeRatings}
          value={getRatingsCategory()}
          options={ratings}
          placeholder="Рейтинг"
          isMulti
          components={animatedComponents}
        />
        <Select
          classNamePrefix="custom-select"
          onChange={onChangeYears}
          value={getYearsCategory()}
          options={years}
          placeholder="Год"
          isMulti
          components={animatedComponents}
        />
      </div>
      <div className="anims-main">
        {anims &&
          anims.items.map((movie: TMovie) => (
            <Animation movie={movie} key={movie.kinopoiskId} />
          ))}
      </div>
    </div>
  );
};
