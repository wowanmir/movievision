import { Movie } from "./Movie";
import "./HitMovies.css";

export const RecommendedMovies = () => {
  return (
    <div className="hit-movie">
      <p>Рекомендуемые фильмы</p> <br />
      <div className="hit-movie-each">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
};
