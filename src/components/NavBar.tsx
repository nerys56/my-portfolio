import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu: React.FC = () => {
  return (
    <>
      <Navbar bg="light bg-transparent" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">My Creative Den</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#Articles">Articles</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;