import React from "react";
import "./Testimonial.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/ab.png";
import img5 from "../../img/img5.png";

function Testimonial() {
  return (
    <div className="testimonial">
      <h3>OUR GUESTS LOVE US</h3>
      <p>What our guests are saying about us</p>

      <Container fluid className="con">
        <Row>
          <Col className="test">
            <img src={img2} alt="" />
            <div className="test-info">
              <div>
                <span>Random Name</span>
                <span>💬</span>
              </div>

              <p>******</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </p>
            </div>
          </Col>
          <Col className="test">
            <img src={img2} alt="" />
            <div className="test-info">
              <div>
                <span>Random Name</span>
                <span>💬</span>
              </div>
              <p>******</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </p>
            </div>
          </Col>
          <Col className="test">
            <img src={img2} alt="" />
            <div className="test-info">
              <div>
                <span>Random Name</span>
                <span>💬</span>
              </div>
              <p>******</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonial;
