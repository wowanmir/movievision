import { Route, Routes } from "react-router-dom";
import { Animations } from "./pages/Animations/Animations";
import { Movies } from "./pages/Movies/Movies";
import { Series } from "./pages/Series/Series";
import { NotFound } from "./components/notFound/NotFound";
import { Home } from "./pages/Home/Home";
import { Content } from "./components/content/Content";
import AppLayout from "./pages/AppLayout/AppLayout";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { Footer } from "./components/footer/Footer";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
function App() {
  return (
    <div className="app">
      <AppLayout />
      <div className="content">
        <div className="side-box"><Sidebar /></div>
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
