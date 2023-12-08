import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  LineIcon,
  SearchIcon,
  WatchListIcon,
  MenuIcon,
  AvatarIcon,
  Icon,
} from "../icons/index";
import "../content/Content";
import "./Sidebar.css";
import { UserProfileIcon } from "../icons/user-profile-icon";
import { LogOutIcon } from "../icons/log-out-icon";
import { NotificationsIcon } from "../icons/notifications-icon";

const options = [
  {
    value: "movies",
    label: "Фильмы",
  },
  {
    value: "series",
    label: "Сериалы",
  },
  {
    value: "animations",
    label: "Мультфильмы",
  },
];
export const Sidebar = () => {
  return (
    <>
      <div className="side-box">
        <div className="logo">
          <a href="/">
            <Icon size={50} />
          </a>
        </div>
        <div className="sidebar">
          <LineIcon />
          <div>
            <MenuIcon size="15" /> Меню
          </div>
          <div className="navigation">
            <div>
              <HomeIcon size="15" />
              <NavLink className="home-link" to="/">
                {" "}
                Домой
              </NavLink>
            </div>
            <NavLink className="text-name" to="/movies">
              Фильмы
            </NavLink>
            <NavLink className="text-name" to="/series">
              Сериалы
            </NavLink>
            <NavLink className="text-name" to="/animations">
              Мультфильмы
            </NavLink>
          </div>
          <LineIcon />
          <div className="profile">
            <p>
              <AvatarIcon size="15" /> Volodia
            </p>
            <p>
              <UserProfileIcon size="20" /> Профиль
            </p>
            <p>
              <NotificationsIcon size="20" /> Уведомления
            </p>
            <p>
              <WatchListIcon size="17" /> Избранное
            </p>
            <p>
              <LogOutIcon size="20" /> Выйти
            </p>
          </div>
          <LineIcon />
          <div className="search-panel">
            <SearchIcon size={20} />
            <input className="search" type="text" placeholder="Поиск..." />
          </div>
        </div>
      </div>
    </>
  );
};

