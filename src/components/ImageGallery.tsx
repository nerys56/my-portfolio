import { Row, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

interface imageItem {
  id: string;
  src: string;
  title: string;
  alt: string;
  link: string;
}

const imageItem = [
  {
    id: 1,
    image: "/images/nerys-img.jpg",
    title: "Propel Workforce",
    alt: "",
    link: "/components/propelworkforce",
  },
  {
    id: 2,
    image: "/images/nerys-img.jpg",
    title: "CyberChix",
    alt: "",
    link: "",
  },
  {
    id: 3,
    image: "/images/nerys-img.jpg",
    title: "Propel Workforce",
    alt: "",
    link: "",
  },
  {
    id: 1,
    image: "/images/nerys-img.jpg",
    title: "Propel Workforce",
    alt: "",
    link: "",
  },
  {
    id: 2,
    image: "/images/nerys-img.jpg",
    title: "CyberChix",
    alt: "",
    link: "",
  },
  {
    id: 3,
    image: "/images/nerys-img.jpg",
    title: "Propel Workforce",
    alt: "",
    link: "",
  },
];

export const ImageGallery: React.FC = () => {
  return (
    <>
      <section id="work" className="img">
        <Container fluid="md">
          <div className="portfolio">Portfolio</div>
          <Row xs={12} am={6} md={4} lg={4} className="g-3">
            {imageItem.map((image) => {
              return (
                <Col key={image.id} xs={12} am={6} md={4} lg={4}>
                  <Link to={image.link}>
                    <div className="image-container">
                      <Image
                        className="image-item"
                        src={image.image}
                        alt={image.alt}
                        fluid
                      />
                      <div className="overlay">{image.title}</div>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <></>
    </>
  );
};

export default ImageGallery;
