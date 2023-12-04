import { NavLink } from "react-router-dom";
import { SearchIcon } from "../../components/icons/search-icon";
import "./Header.css";
export function Header () {
  return (
    <div className="header">
      <div className="logo-nav">
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
          </div>
        </div>
      </div>
    </div>
  );
}