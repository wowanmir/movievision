import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Sidebar } from "./components/sidebar/Sidebar";
import { AppRoutes } from "./AppRoutes";
import { Header } from "./pages/Header/Header";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div>
        <Sidebar />
        <Footer />
      </div>
      <div className="container">
        <Header />
        <Content>
          <AppRoutes />
        </Content>
      </div>
    </div>
  );
}

export default App;
