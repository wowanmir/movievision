import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Sidebar } from "./components/sidebar/Sidebar";
import { AppRoutes } from "./AppRoutes";
import Header from "./pages/Header/Header";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="side-box">
        <Sidebar />
        <Footer />
      </div>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content>
            <AppRoutes />
          </Content>
        </div>
      </div>
    </div>
  );
}

export default App;
