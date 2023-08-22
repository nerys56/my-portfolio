import { Container } from "react-bootstrap";
import Menu from "./NavBar";
import  "./Contact.css";
import ContactForm from "./ContactForm";
import InnerHeader from "./InnerHeader";

const Contact = () => {
  return (
    <>
      <Container fluid className="full-width-container background-color">
      <div>
          <InnerHeader
            title={"Say hello"}
            subtitle={"Let's keep in touch"}
          />
        </div>
      </Container>
      <Container className="contact-container">
        <ContactForm />
      </Container>
    </>
  );
};

export default Contact;
