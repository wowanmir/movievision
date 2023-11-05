import { HitMovies } from "./HitMovies";
import { NewMovies } from "./NewMovies";
import { RecommendedMovies } from "./RecommendedMovies";

export const Content = () => {
    return (
        <div>
            <HitMovies />
            <NewMovies />
            <RecommendedMovies />
        </div>
    );
}