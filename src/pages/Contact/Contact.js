import React from "react";
import "./Contact.css";
import Container from "react-bootstrap/Container";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import g from "../../img/g.png";
import img4 from "../../img/ab.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";
import fb from "../../img/fb.jpg";
import l from "../../img/l.png";
import wh from "../../img/wh.png";
import insta from "../../img/insta.png";
import y from "../../img/y.png";
import { Button, TextareaAutosize, TextField } from "@mui/material";

function Contact() {
  return (
    <div className="contact">
      <Container fluid>
        <Row>
          <img src={g} alt="" />
        </Row>
      </Container>
      <div className="contactImage">
        <div>
          <img className="contacImg" src={img4} alt="" />
        </div>
        <div>
          <img className="contacImg" src={img5} alt="" />
        </div>
        <div>
          <img className="contacImg" src={img6} alt="" />
        </div>
      </div>

      <div className="contactDiv">
        <h1>Contact</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          className="formBox"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              variant="filled"
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              id="filled-number"
              label="Phone Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              id="filled-helperText"
              label="Purpose of Visit"
              variant="filled"
              style={{ width: "98%", margin: "2rem 0" }}
            />
          </div>

          <div>
            <TextField
              required
              id="standard-required"
              label="Check In"
              type="date"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              required
              id="standard-required"
              label="Check Out"
              type="date"
              defaultValue="Hello World"
              variant="filled"
            />
          </div>
          <div>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              label="Additional Notes"
              placeholder="Write something.. "
              style={{ width: "100%", margin: "2rem 0" }}
              variant="filled"
            />
          </div>
        </Box>
        <Button className="formBtn" variant="outlined">
          SUBMIT
        </Button>
      </div>

      <div className="social">
        <span>
          <img src={fb} alt="" />
        </span>
        <span>
          <img src={wh} alt="" />
        </span>
        <span>
          <img src={l} alt="" />
        </span>
        <span>
          <img src={y} alt="" />
        </span>
        <span>
          <img src={insta} alt="" />
        </span>
      </div>

      <div className="contactInfo">
        <div>
          <p className="contactBold">Contact: </p> <p>+919999999999</p>
        </div>
        <div>
          <p className="contactBold">Email: </p> <p>example@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
