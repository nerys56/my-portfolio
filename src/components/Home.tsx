import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import HeroBanner from "./HeroBanner";
import ImageGallery from "./ImageGallery";
import "./Home.css";
import Menu from "./NavBar";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <>
      <div className=" container-fluid back">
        <div className="App-header">
          <div>
            <HeroBanner />
          </div>
        </div>
      </div>

      <ImageGallery />
      <Container className="fluid">
        <Row>
          <Col className="fluid"></Col>
        </Row>
      </Container>
      <Testimonials />
      <ContactForm />
    </>
  );
}

export default Home;
