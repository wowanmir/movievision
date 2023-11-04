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
      <img src={film.posterUrl} className="w-32" alt={film.nameRu} />
      <p>{film.nameRu}</p>
      <button
        className={btnClassesName.join(" ")}
        onClick={() => setDescription((prev) => !prev)}
      >
        {description ? "Скрыть описание" : "Показать описание"}
      </button>
      {description && <p>{film.description}</p>}
      <p>
        Рейтинг:
        <span style={{ fontWeight: "bold" }}>{film.rating}</span>
      </p>
    </div>
  );
}
