import Navbar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import Container from "react-bootstrap/Card";
import Row from "react-bootstrap/Card";
import Col from "react-bootstrap/Card";
import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Articles from "./components/Articles";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import MyBumpyTechJourney from "./components/MyBumpyTechJourney";

function App() {
  return (
    <Routes>
      <Route path="/articles" element={<Articles />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mybumpytechjourney" element={<MyBumpyTechJourney />} />
    </Routes>
  );
}

export default App;
