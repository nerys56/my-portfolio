import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

const HeroBanner: React.FC = () => {
  return (
    <Container className="header container">
      <figure className=" header content">
        <figcaption className="intro">
          <h1 className="me">Hi, I'm Nerys</h1>
          <p>
            A Graphic designer / developer from the South Wales area. My
            Creative Den was built with the passion to help your business
            thrive, give you confidence and attract your target market.
          </p>
        </figcaption>
      </figure>
      <a className="cta-learn dark">Learn More</a>
      <Button variant="dark" className="cta-talk light">
        {" "}
        Let's Talk
      </Button>
    </Container>
  );
};

export default HeroBanner;
