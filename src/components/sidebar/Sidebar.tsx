import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  LineIcon,
  SearchIcon,
  WatchListIcon,
  MenuIcon,
  AvatarIcon,
  Icon,
  MovieCategoryIcon,
  UserProfileIcon,
  LogOutIcon,
  NotificationsIcon
} from "../icons";
import "../content/";
import "./Sidebar.css";

const setActive = ({ isActive }: any) =>
  isActive ? "text-name-active" : "text-name";
export const Sidebar = () => {
  return (
    <>
      <div className="side-box">
        <div className="logo">
          <a href="/">
            <Icon size={25} />
          </a>
          <div>Kino-Films</div>
        </div>
        <div className="sidebar">
          <LineIcon />
          <div>
            <MenuIcon size="18" /> Меню
          </div>
          <div className="navigation">
            <div>
              <HomeIcon size="15" />
              <NavLink className={setActive} to="/">
                {" "}
                Домой
              </NavLink>
            </div>
            <div>
              <MovieCategoryIcon size="20" />
              <NavLink className={setActive} to="/movies">
                Фильмы
              </NavLink>
            </div>
            <div>
              <MovieCategoryIcon size="20" />
              <NavLink className={setActive} to="/serials">
                Сериалы
              </NavLink>
            </div>
            <div>
              <MovieCategoryIcon size="20" />
              <NavLink className={setActive} to="/animations">
                Мультфильмы
              </NavLink>
            </div>
          </div>
          <LineIcon />
          <div className="profile">
            <p>
              <AvatarIcon size="17" /> Volodia
            </p>
            <p>
              <UserProfileIcon size="18" /> Профиль
            </p>
            <p>
              <NotificationsIcon size="20" /> Уведомления
            </p>
            <p>
              <WatchListIcon size="20" /> Избранное
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
