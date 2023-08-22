import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Menu: React.FC<{csmLink?: boolean}> = ({csmLink}) => {
  return (
    <>
      <Navbar bg="light bg-transparent" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home">My Creative Den</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className={csmLink ? "csm-link" : ""} to={"/articles"}> Articles</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={csmLink ? "csm-link" : ""} to={"/contact"}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
