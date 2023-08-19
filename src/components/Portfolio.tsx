import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Card";

export interface PortfolioItem {
  image: string;
  title: string;
}


const PortfolioItem: React.FC<PortfolioItem> = ({ image, title }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Img src={image} />
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PortfolioItem;