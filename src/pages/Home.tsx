import { HitMovies } from "../components/HitMovies";
import { NewMovies } from "../components/NewMovies";
import { RecommendedMovies } from "../components/RecommendedMovies";
import "./Home.css";
export function Home() {
  return (
    <div className="home">
      <div className="hit">
        <HitMovies />
      </div>
      <div className="new">
        <NewMovies />
      </div>
      <div className="rec">
        <RecommendedMovies />
      </div>
    </div>
  );
}
