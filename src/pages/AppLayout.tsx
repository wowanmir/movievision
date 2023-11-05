import { NavLink } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="navigation">
        <NavLink to="/movies">
          Фильмы
        </NavLink>
        <NavLink to="/series">
          Сериалы
        </NavLink>
        <NavLink to="/animations">
          Мультфильмы
        </NavLink>
        <input type="text" placeholder="Поиск..." />
        <button type="submit">Найти</button>
      </div>
    </>
  );
};

export default AppLayout;
