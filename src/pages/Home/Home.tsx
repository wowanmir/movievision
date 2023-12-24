import { Suspense, useEffect, useState } from "react";
import { TMovieResponseData } from "../../data/data";
import LazyLoading from "../../components/LazyLoading";
import {
  HitMoviesService,
  NewMoviesService,
  RecMoviesService,
} from "../../data/movie.service";
import { MoviesList } from "./MoviesList";
import "./Home.css";
export function Home() {
  const [hitMovies, setHitMovies] = useState<TMovieResponseData>();
  const [newMovies, setNewMovies] = useState<TMovieResponseData>();
  const [recMovies, setRecMovies] = useState<TMovieResponseData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getHomeMoviesData = async () => {
      setLoading(true);
      const hitMoviesData = await HitMoviesService.getAllFilms();
      const newMoviesData = await NewMoviesService.getAllFilms();
      const recMoviesData = await RecMoviesService.getAllFilms();
      setHitMovies(hitMoviesData);
      setNewMovies(newMoviesData);
      setRecMovies(recMoviesData);
      setLoading(false);
    };
    getHomeMoviesData();
  }, []);

  return (
    <div>
      <Suspense fallback={<LazyLoading />}>
        <div className="home">
          <MoviesList movies={hitMovies} loading={loading} />
          <MoviesList movies={newMovies} loading={loading} />
          <MoviesList movies={recMovies} loading={loading} />
        </div>
      </Suspense>
    </div>
  );
}
