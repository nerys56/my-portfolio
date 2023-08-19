import Navbar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import Container from "react-bootstrap/Card";
import Row from "react-bootstrap/Card";
import Col from "react-bootstrap/Card";
import "./App.css";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div className="App container-fluid back">
      <header className="App-header">
        <Navbar />
        <HeroBanner />
      </header>
      <body>
        <ImageGallery />
        <Container className="fluid">
          <Row>
            <Col className="fluid"></Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
