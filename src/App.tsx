import { Route, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
// import { NotFound } from "./components/NotFound";
import { Animations } from "./pages/Animations";
import { Movies } from "./pages/Movies";
import { Series } from "./pages/Series";
import AppLayout from "./pages/AppLayout";
import "./App.css";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Animations" element={<Animations />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;