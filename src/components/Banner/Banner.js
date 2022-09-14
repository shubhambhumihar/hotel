import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";
import "./Banner.css";
import Form from "react-bootstrap/Form";
import Section from "../Section/Section";

function Banner() {
  return (
    <div className="banner">
      <div className="d-flex flex-column  ">
        <Carousel controls={false} indicators={false} interval={2000}>
          <Carousel.Item>
            <img className="d-block w-100 image" src={img5} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src={img4}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image" src={img3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image" src={img1} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image" src={img2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image" src={img6} alt="Third slide" />
          </Carousel.Item>
        </Carousel>

        <div className="book">
          <Card style={{ width: "100%" }} className="car">
            <Card.Body>
              <div className="head">
                <Card.Title className="text-center cus">
                  BOOK YOUR STAY
                </Card.Title>
              </div>

              <Form>
                <Form.Group
                  className="mb-3 w-50 ms-auto"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Check In</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-50 ms-auto"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Check Out</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-50 ms-auto"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Check Out</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Form>

              <div className="btnn">
                <a>Check Availablility</a>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div>
        <Section />
      </div>
    </div>
  );
}

export default Banner;
