import { Button, Col, Container, Row , Image} from "react-bootstrap";
import Menu from "./NavBar";
import "./Articles.css";
import { Link } from "react-router-dom";

interface ArticleItem {
  id: string;
  src: string;
  title: string;
  alt: string;
  link: string;
}

const ArticleItem = [
  {
    id: 1,
    image: "/images/nerys-img.jpg",
    title: "Propel Workforce",
    alt: "",
    link: "/MyBumpyTechJourney",
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

const Articles: React.FC = () => {
  return (
    <><Container fluid className="full-width-container background-color">
      <Menu />
      <div className="artcile-bg">
        <div className="article-title">
          <h1 className="title">A glimpse into my world</h1>
          <p className="sub-heading">Sharing my latest experiences</p>
        </div>
      </div>
    </Container><>
        <section id="work" className="img">
          <Container fluid="md">
            <div className="portfolio">Aticles</div>
            <Row xs={12}  className="g-3">
              {ArticleItem.map((image) => {
                return (
                  <Col key={image.id} xs={12} >
                    <Link to={image.link}>
                      <div className="image-container">
                        <Image
                          className="image-item"
                          src={image.image}
                          alt={image.alt}
                          fluid />
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
      </></>
    
  );
};

export default Articles;
