import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./GalleryImg.css";

import g from "../../img/g.png";
import img6 from "../../img/img6.png";

function GalleryImg() {
  return (
    <div className="gallerySingleImg">
      <Container>
        <Row className="galleryRow" xs={1} md={2} lg={4}>
          <Col className="galleryCol">
            <img className="imggg shadow" src={img6} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={img6} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={img6} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={img6} alt="" />
          </Col>
        </Row>
        <Row className="galleryRow" xs={1} md={2} lg={4}>
          <Col className="galleryCol">
            <img className="imggg shadow" src={img6} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={img6} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={img6} alt="" />
          </Col>
          <Col className="galleryCol">
            <img className="imggg shadow" src={img6} alt="" />
          </Col>
        </Row>
      </Container>
      {/* <div className="conta">
        <div className="shadow">
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
        <div>
          <img className="imggg shadow" src={img6} alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default GalleryImg;
