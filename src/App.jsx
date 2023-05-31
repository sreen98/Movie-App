import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import PageNotFound from "./component/PageNotFound";

function App() {
  return (
    <div className="moviecontainer">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route Component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
