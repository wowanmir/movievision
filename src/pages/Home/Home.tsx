import { Suspense } from "react";
import LazyLoading from "../../components/LazyLoading";
import { HitMovies, NewMovies, RecMovies } from "./MoviesMain/index";
import "./Home.css";
export function Home() {
  return (
    <div>
      <Suspense fallback={<LazyLoading />}>
        <div className="home">
          <HitMovies />
          <NewMovies />
          <RecMovies /> 
        </div>
      </Suspense>
    </div>
  );
}
