import axios from "axios";
import { API_FILM, API_KEY } from "../data/api";
import { TFilm } from "../data/data";

export async function getFilm(kinopoiskId: string): Promise<TFilm> {
  const response = await axios.get<TFilm>(`${API_FILM + kinopoiskId} `, {
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
  });

  return response.data;
}
