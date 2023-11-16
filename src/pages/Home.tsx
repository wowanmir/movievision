import { HitMovies } from "../components/HitMovies";
import { NewMovies } from "../components/NewMovies";
import { RecommendedMovies } from "../components/RecommendedMovies";
export function Home() {
  return (
    <div className="home">
      <HitMovies />
      <NewMovies />
      <RecommendedMovies />
    </div>
  );
}
