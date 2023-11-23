import { HitMovies } from "../../components/hitMovies/HitMovies";
import { NewMovies } from "../../components/newMovies/NewMovies";
import { RecommendedMovies } from "../../components/recommendedMovies/RecommendedMovies";
import "./Home.css";
export function Home() {
  return (
    <div className="home-page">
      <div className="home">
        <HitMovies />
        <NewMovies />
        <RecommendedMovies />
      </div>
    </div>
  );
}
