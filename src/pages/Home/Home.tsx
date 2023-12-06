import { Suspense } from "react";
import LazyLoading from "../../components/LazyLoading";
import { HitMovies } from "../../components/hitMovies/HitMovies";
import { NewMovies } from "../../components/newMovies/NewMovies";
import { RecommendedMovies } from "../../components/recommendedMovies/RecommendedMovies";
import "./Home.css";
export function Home() {
  return (
    <div>
      <Suspense fallback={<LazyLoading />}>
        <div className="home">
          <HitMovies />
          <NewMovies />
          <RecommendedMovies />
        </div>
      </Suspense>
    </div>
  );
}
