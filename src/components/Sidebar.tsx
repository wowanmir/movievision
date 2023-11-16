import { NavLink } from "react-router-dom";
import { CategoryIcon } from "./icons/category-icon";
import { HomeIcon } from "./icons/home-icon";
import { LineIcon } from "./icons/line-icon";
import { WatchListIcon } from "./icons/watch-list-icon";
import { MenuIcon } from "./icons/menu-icon";
import { AvatarIcon } from "./icons/avatar-icon";
import "./Content";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <LineIcon />
      <span>
        <MenuIcon size="15" /> Меню
      </span>
      <div>
        <HomeIcon size="15" /> <NavLink className="home-link" to="/">Домой</NavLink>
      </div>
      <span>
        <CategoryIcon size="15" /> Категории
      </span>
      <LineIcon />
      <span>
        <AvatarIcon size="15" /> Volodia
      </span>
      <span>
        <WatchListIcon size="17" /> Список фильмов
      </span>
      <LineIcon />
    </div>
  );
};
