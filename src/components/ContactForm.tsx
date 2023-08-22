import React from 'react'
import "./ContactForm.css";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap';

function ContactForm() {
  return (
    <><div>ContactForm</div>
    <Container>
    <form
          action="https://formspree.io/f/xoqodjjk"
          method="POST"
      >
          <label>
              Your email:
              <input type="email" name="email"></input></label>
          <label>
              Your message:
              <textarea name="message"></textarea>
          </label>
        
          <button type="submit">Send</button>
      </form>
      </Container></>
  )
}

export default ContactForm



