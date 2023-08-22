import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import "./HeroBanner.css";
import Menu from "./NavBar";



const HeroBanner: React.FC = () => {
    return (
  <Container className="background-image-container">
    <Menu/>
            <div className="background-image">
                <div className="text-overlay">
                <h1 className="me">Hi, I'm Nerys</h1>
                <p>
                    A Graphic designer / developer from the South Wales area. My
                    Creative Den was built with the passion to help your business
                    thrive, give you confidence and attract your target market.
                </p>
            </div>
            </div>

        <a href="#work" className="cta-learn dark">Learn More</a>
        <Button href="/contact" variant="dark" className="cta-talk light">
                {" "}
                Let's Talk
            </Button>
      </Container>
    );
  };

  export default HeroBanner;