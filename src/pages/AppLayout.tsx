import { NavLink } from "react-router-dom";
import { SearchIcon } from "../components/icons/search-icon";
import "./AppLayout.css";
import { Icon } from "../components/icons/icon";
const AppLayout = () => {
  return (
    <div className="logo-nav">
        <div className="logo">
          <a href="/">
          <Icon size={50} /> 
          </a>
        </div>
      <div className="navigation">
        <NavLink className="text-name" to="/movies">
          Фильмы
        </NavLink>
        <NavLink className="text-name" to="/series">
          Сериалы
        </NavLink>
        <NavLink className="text-name" to="/animations">
          Мультфильмы
        </NavLink>
        <div className="search-panel">
          <SearchIcon size={20} />
          <input className="search-nav" type="text" placeholder="Поиск..." />
          <button className="btn-nav" type="submit"></button>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
