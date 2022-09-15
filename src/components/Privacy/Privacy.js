import React from "react";
import { Container, ListGroup, Row } from "react-bootstrap";
import "./Privacy.css";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function Privacy() {
  return (
    <div className="privacy">
      <Container fluid>
        <Row className="privacyRow">
          <h1>PRIVACY POLICY</h1>
        </Row>
      </Container>

      <Container className="privacyText1">
        <p>Four Square Hotels- By Basu Hotels &gt; Terms and Conditions</p>
      </Container>
      <Container className="m-auto">
        <p className="fs-4">
          Four Square Hotels respects the privacy of all our guests, and we are
          committed to protecting it. This policy describes how we collect, use,
          and disclose information about our guests.
        </p>
      </Container>
      <Container className="m-auto">
        <h1 className="infoH">INFORMATION COLLECTED</h1>
        <p className="fs-4 lh-base">
          We collect information that can identify you personally, such as your
          name, mailing address, telephone number, email address, credit card
          information, etc. only when it is voluntarily provided to us by you or
          by a third party (such as a travel agency) on your behalf. We collect
          personal data when it is provided through forms on our websites, over
          the phone, through physical mail or e-mail, or in-person.
        </p>
      </Container>
      <Container className="m-auto">
        <h1 className="infoH">USE OF INFORMATION</h1>
        <p className="fs-4 lh-base">
          Four Square Hotels use your personal data to fulfil the purpose for
          which it was provided, or as otherwise set forth in this policy. For
          example, we may use your personal data as necessary to:
        </p>
      </Container>
      <Container className="m-auto">
        <ListGroup>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            Process your reservation request, and payment;
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Enroll you in Four Square Hotels loyalty program
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Contact you about your reservation;
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            Make requested changes to your reservation or user account;
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />{" "}
            Provide you with a personalized experience on our websites;
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Contact you about your reservation;
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Respond to your inquiries and other communications;
          </ListGroup.Item>
          <ListGroup.Item style={{ fontSize: "1.6rem", padding: "1rem" }}>
            <KeyboardDoubleArrowRightIcon
              style={{ color: "#F57328", marginRight: "1rem" }}
            />
            Register you to receive newsletters or other information for which
            you’ve expressed an interest.
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <Container className="m-auto">
        <h1 className="infoH">SHARING OF INFORMATION</h1>
        <p className="fs-4 lh-base">
          We will not Share/Sell any of your personal data to any outside
          organization.
        </p>
      </Container>
      <Container className="m-auto">
        <h1 className="infoH">SECURITY OF PERSONAL DATA</h1>
        <p className="fs-4 lh-base">
          Four Square Hotels is committed to the security of your personal data.
          (We use commercially reasonable technical measures to protect personal
          data in our possession like credit card information, name, address,
          email and other sensitive information you provide to us).
        </p>
      </Container>
    </div>
  );
}

export default Privacy;
