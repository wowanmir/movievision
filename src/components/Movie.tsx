import { IMovie } from "../data/data";

interface MovieProps {
  movie: IMovie;
}
export function Movie({ movie }: MovieProps) {
  return (
    <>
      <div className="movie">
        <img src={movie.items[0].posterUrlPreview} alt="" />
      </div>
      <p>{movie.items[0].nameRu}</p>
      <div>{movie.items[0].ratingKinopoisk}</div>
    </>
  );
}
