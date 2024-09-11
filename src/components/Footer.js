import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/ah-logo.svg";

import liIcon from '../assets/img/nav-icon1.svg';
import ghIcon from '../assets/img/gh-icon.svg';
import emailIcon from '../assets/img/email-icon.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/artemis-hingston/"><img src={liIcon} alt="LinkedIn" /></a>
              <a href="https://github.com/ArtemisInCode"><img src={ghIcon} alt="GitHub" /></a>
              <a href="mailto:artemis.hingston@gmail.com"><img src={emailIcon} alt="Email" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}