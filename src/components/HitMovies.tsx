import { Movie } from "./Movie";

export const HitMovies = () => {
  return (
    <div className="hit-movies">
      <p>Главные новинки</p>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
};
