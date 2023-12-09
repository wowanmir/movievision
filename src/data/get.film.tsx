import axios from "axios";
import { API_KEY, BASE_API_URL } from "./api";
import { TFilm } from "./data";

export async function getFilm(kinopoiskId: string): Promise<TFilm> {
  const response = await axios.get<TFilm>(`${BASE_API_URL + kinopoiskId}`, {
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
  });

  return response.data;
}
