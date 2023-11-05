import { NavLink, Outlet } from "react-router-dom";

const AppLayout = () => {
  const activeClass = ({ isActive }) => (isActive ? "current" : "");
  return (
    <>
      <div className="navigation">
      <NavLink to="/" className={activeClass}>
          На главную
        </NavLink>
        <NavLink to="/movies" className={activeClass}>
          Фильмы
        </NavLink>
        <NavLink to="/series" className={activeClass}>
          Сериалы
        </NavLink>
        <NavLink to="/animations" className={activeClass}>
          Мультфильмы
        </NavLink>
        <input type="text" placeholder="Поиск..." />
        <button type="submit">Найти</button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
