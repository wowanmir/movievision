import { HitMovies } from "../components/HitMovies";
import { NewMovies } from "../components/NewMovies";
import { Sidebar } from "../components/Sidebar";
import { RecommendedMovies } from "../components/RecommendedMovies";
export function Home() {
  return (
    <div className="home-page">
      <div className="side-box">
        <Sidebar />
      </div>
      <div className="home">
        <HitMovies />
        <NewMovies />
        <RecommendedMovies />
      </div>
    </div>
  );
}
