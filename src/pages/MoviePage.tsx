import { useEffect, useState } from "react";
import { Film } from "../components/Film";
import { API_KEY } from "../data/api";
import { TFilm } from "../data/data";
import axios from "axios";

export function MoviePage() {
  const [films, setFilms] = useState<TFilm | undefined>(undefined);
  async function getFilms() {
    
    const response = await axios.get<TFilm>(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/",
      {
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      }
      );
      setFilms(response.data);
    }
    
    useEffect(() => {
      getFilms();
    }, []);
    
    return (
      <div>
      {Array.isArray(films) &&
        films.map((film: TFilm) => <Film film={film} key={film.kinopoiskId} />)}
    </div>
  );
}
