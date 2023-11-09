import { Movie } from "./Movie";
import "./HitMovies.css";
export const NewMovies = () => {
  return (
    <div className="hit-movies">
      <p>Новые фильмы</p>
      <div className="hit-movie-each">
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      </div>
    </div>
  );
};
