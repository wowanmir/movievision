
import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { Content, Footer, Header, Sidebar } from "./components";
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
