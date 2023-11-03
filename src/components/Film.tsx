import { useState } from "react";
import { IFilm } from "../models";

interface FilmProps {
  film: IFilm;
}
export function Film({ film }: FilmProps) {
  const [description, setDescription] = useState(false);

  const btnBgClassesName = description ? "bg-red-500" : "bg-blue-500";
  const btnClassesName = ["py-2 px-4 border text-black", btnBgClassesName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={film.films[0].posterUrl} className="w-32" alt={film.films[0].nameRu} />
      <p>{film.films[0].nameRu}</p>
      <button
        className={btnClassesName.join(" ")}
        onClick={() => setDescription((prev) => !prev)}
      >
        {description ? "Скрыть описание" : "Показать описание"}
      </button>
      {description && <p>{film.films[0].description}</p>}
      <p>
        Рейтинг:
        <span style={{ fontWeight: "bold" }}>{film.films[0].rating}</span>
      </p>
    </div>
  );
}
