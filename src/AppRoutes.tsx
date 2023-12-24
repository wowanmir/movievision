import { Route, Routes } from "react-router-dom";
import { Animations } from "./pages/Animations/Animations";
import { Movies } from "./pages/Movies/Movies";
import { Serials } from "./pages/Series/Serials";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home/Home";
import { MoviePage } from "./pages/MoviePage/MoviePage";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/serials" element={<Serials />} />
      <Route path="/animations" element={<Animations />} />
      <Route path="/movie/:kinopoiskId" element={<MoviePage />} />
      <Route path="/serial/:kinopoiskId" element={<MoviePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
