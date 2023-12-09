import axios from "axios";
import { TMovieResponseData } from "./data";
import { API_KEY, API_SLIDER_1, API_SLIDER_2, API_SLIDER_3 } from "./api";

export const HitMoviesService = {
  async getAllFilms() {
    const response = await axios.get<TMovieResponseData>(API_SLIDER_1, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },
};

export const MovieService = {
  async getAllFilms() {
    const response = await axios.get<TMovieResponseData>(API_SLIDER_2, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },
};

export const RecMoviesService = {
  async getAllFilms() {
    const response = await axios.get<TMovieResponseData>(API_SLIDER_3, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },
};
