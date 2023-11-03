import { useEffect, useState } from "react";
import { IFilm } from "../models";
import axios, { AxiosError } from "axios";

export function useFilms () {
    const [films, setFilms] = useState<IFilm[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function getFilms() {
    try {
        setError('');
        setLoading(true);
        const response = await axios.get<IFilm[]>(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films",
        {
            method: "GET",
            headers: { "X-API-KEY": "d4fd78fe-13ed-4b1b-af4e-1b0c7e2e64b1","Content-Type": "application/json",},
        });
        setFilms(response.data);
        setLoading(false);
    } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
    }
  }

    useEffect(() => {
    getFilms();
  }, []);

    return {
    films,
    loading,
    error,
  };
}
