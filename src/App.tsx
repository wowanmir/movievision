import { Film } from "./components/Film";
import { useFilms } from "./hooks/films";
function App() {
  const { films, loading, error } = useFilms();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1 className="text-3xl font-bold mb-5">Кинофильмы</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {films.items?.map((film) => (<Film film={film} key={film.kinopoiskId} />))}
    </div>
  );
}

export default App;
