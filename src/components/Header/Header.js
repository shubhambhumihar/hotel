import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="h"
      >
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Nav.Link href="/" className="me-5 text-uppercase c">
                  HOME
                </Nav.Link>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Nav.Link href="/" className="me-5 text-uppercase c">
                  About us
                </Nav.Link>
              </Link>
              <Link to="/gallery" style={{ textDecoration: "none" }}>
                <Nav.Link href="/" className="me-5 text-uppercase c">
                  Gallery
                </Nav.Link>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Nav.Link href="/" className="me-5 text-uppercase c">
                  Contact us
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
