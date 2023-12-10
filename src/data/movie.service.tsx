import axios from "axios";
import { TFilm, TMovieResponseData } from "./data";
import {
  BASE_API_URL,
  API_KEY,
  TOP_250_MOVIES,
  TOP_NEW_MOVIES,
  TOP_POPULAR_MOVIES,
  CATEGORY,
  FILM1,
} from "./api";
export const HitMoviesService = {
  async getAllFilms() {
    const response = await axios.get<TMovieResponseData>(
      BASE_API_URL + TOP_250_MOVIES,
      {
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  },
};

export const NewMoviesService = {
  async getAllFilms() {
    const response = await axios.get<TMovieResponseData>(
      BASE_API_URL + TOP_NEW_MOVIES,
      {
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  },
};

export const RecMoviesService = {
  async getAllFilms() {
    const response = await axios.get<TMovieResponseData>(
      BASE_API_URL + TOP_POPULAR_MOVIES,
      {
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  },
};

export const CategoryService = {
  async getCategory() {
    const response = await axios.get<TMovieResponseData>(CATEGORY, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};

export const MovieService = {
  async getFilm() {
    const response = await axios.get<TFilm>(FILM1, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};
