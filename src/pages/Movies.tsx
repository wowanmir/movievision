import { Movie } from "../components/Movie";
import "./Movies.css";
export function Movies() {
  return (
    <div className="movies">
      <p style={{ color: "Green" }}>Фильмы</p>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
}
