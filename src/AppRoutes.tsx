import { Route, Routes } from "react-router-dom";
import { Animations } from "./pages/Animations/Animations";
import { Movies } from "./pages/MoviePage/Movies/Movies";
import { Series } from "./pages/Series/Series";
import { NotFound } from "./pages/Home/MoviesMain/NotFound";
import { Home } from "./pages/Home/Home";
import { MoviePage } from "./pages/MoviePage/MoviePage";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/animations" element={<Animations />} />
      <Route path="/movie/:kinopoiskId" element={<MoviePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
