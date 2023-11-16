import { Route, Routes } from "react-router-dom";
import { Animations } from "./pages/Animations";
import { Movies } from "./pages/Movies";
import { Series } from "./pages/Series";
import { NotFound } from "./components/NotFound";
import { Home } from "./pages/Home";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import AppLayout from "./pages/AppLayout";
import { MoviePage } from "./pages/MoviePage";
import { Footer } from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div className="app">
      <AppLayout />
      <div className="content">
        <div className="side-box">
          <Sidebar />
        </div>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/animations" element={<Animations />} />
            <Route path="/movie/:kinopoiskId" element={<MoviePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
