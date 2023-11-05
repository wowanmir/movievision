import { NavLink } from "react-router-dom";
import { CategoryIcon } from "./icons/category-icon";
import { HomeIcon } from "./icons/home-icon";
import { LineIcon } from "./icons/line-icon";
import { WatchListIcon } from "./icons/watch-list-icon";

export const Sidebar = () => {
  return (
    <div>
      <br />
      <LineIcon />
      <br />
      <span>   Меню</span>
      <br />
      <span>
        <HomeIcon size="15" />
        <NavLink to="/"> Домой</NavLink>
      </span>
      <br />
      <span>
        <CategoryIcon size="15" /> Категории
      </span>
      <br />
      <LineIcon />
      <br />
      <span>   Volodia</span>
      <br />
      <span>
        <WatchListIcon size="15" /> Список фильмов
      </span>
      <br />
      <LineIcon />
      <br />
    </div>
  );
};
