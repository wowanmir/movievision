
import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { Content, Footer, Sidebar } from "./components";
function App() {
  return (
    <div className="app">
      <div>
        <Sidebar />
        <Footer />
      </div>
      <div className="container">
        <Content>
          <AppRoutes />
        </Content>
      </div>
    </div>
  );
}

export default App;
