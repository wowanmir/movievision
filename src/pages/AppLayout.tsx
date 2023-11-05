import { NavLink, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="navigation">
        <NavLink to="/">На главную</NavLink>
        <NavLink to="/Movies"> Фильмы </NavLink>
        <NavLink to="/Series"> Сериалы </NavLink>
        <NavLink to="/Animations"> Мультфильмы </NavLink>
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
