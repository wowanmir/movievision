import { Movie } from "./Movie";
import "./HitMovies.css";
export const HitMovies = () => {
  return (
    <div className="hit-movies">
      <p>Главные новинки</p>
      <div className="hit-movie-each">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
};
