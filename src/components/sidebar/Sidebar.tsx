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
            <AvatarIcon size="15" /> Volodia
            <UserProfileIcon size="20" /> Sign In
            <NotificationsIcon size="20" /> Notifications
            <WatchListIcon size="17" /> Список фильмов
            <LogOutIcon size="20" /> Log Out
          </div>
          <LineIcon />
          <div className="search-panel">
            <SearchIcon size={20} />
            <input className="search-nav" type="text" placeholder="Поиск..." />
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <div>
  <CategoryIcon size="15" /> Категории
  import Select from "react-select";
  <Select className="select" options={options}/>
</div> */
}
