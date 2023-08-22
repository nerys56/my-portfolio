import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Testimonials.css";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="testimonial-title">Testimonials</div>
      <Carousel>
        <Carousel.Item>
          <div className="testimonial-container fluid">
            <div className="testimonial-background">
              <p className="testimonial">
                I have had the absolute pleasure of working with Nerys over the
                last few years. Nerys has the creative ability to translate any
                brief into a fantastic piece of work, even when the brief
                contains minimal details. I email Nerys nearly everyday and she
                always responds so promptly and is extremely efficient work
                with. We have also presented Nerys with some very tight
                deadlines which she never fails to miss and the output is always
                high quality. Nerys is a super talented Graphic Designer whom I
                have really enjoyed working with, I cannot recommend her enough!
                <p>
                  <br />
                  Ben Jones <br />
                  Digital Engagement Senior Officer at Mind
                </p>
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="testimonial-container fluid">
            <div className="testimonial-background">
              <p className="testimonial">
                I have had the absolute pleasure of working with Nerys over the
                last few years. Nerys has the creative ability to translate any
                brief into a fantastic piece of work, even when the brief
                contains minimal details. I email Nerys nearly everyday and she
                always responds so promptly and is extremely efficient work
                with. We have also presented Nerys with some very tight
                deadlines which she never fails to miss and the output is always
                high quality. Nerys is a super talented Graphic Designer whom I
                have really enjoyed working with, I cannot recommend her enough!
                <p>
                  <br />
                  Laura Lewis <br />
                  Digital Engagement Senior Officer at Mind
                </p>
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Testimonials;
