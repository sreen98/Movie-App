import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MovieDetail from "./component/MovieDetail";
import PageNotFound from "./component/PageNotFound";
import Spinner from "react-bootstrap/Spinner";

function App() {
  return (
    <div className="moviecontainer">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/movie/:imdbId" Component={MovieDetail} />
            <Route Component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
