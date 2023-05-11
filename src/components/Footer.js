import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

import { saveAs } from "file-saver";

const Footer = () => {
  const [showFile, setShowFile] = useState(false);

  const handleFileDownload = () => {
    const file = require("../app/assets/Derick Newton Resume update.pdf");
    const resumeDerick = "document.pdf";

    saveAs(file, resumeDerick);
  };
  return (
    <footer>
      <Container className="site-footer">
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h5></h5>
            <ul className="list footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Experience">Experience</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </Col>

          <Col xs="6" sm="3" className="'text-center">
            <h5></h5>
            <a
              className="btn btn-social-icon btn-github"
              href="https://github.com/Dericknewton1979"
              target="_blank"
            >
              <i className="fa fa-github" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-linkedin"
              href="https://www.linkedin.com/in/derick-newton-299a7b166/"
              target="_blank"
            >
              <i className="fa fa-linkedin" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="https://twitter.com/WevDevDN"
              target="_blank"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-instagram"
              href="https://www.instagram.com/webdevdn/"
              target="_blank"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-codepen"
              href="https://codepen.io/Dnewton1979"
              target="_blank"
            >
              <i className="fa fa-codepen" />
            </a>{" "}
          </Col>

          <Col sm="4">
            <h5></h5>
            <a
              role="button"
              className="btn btn-link contact-link"
              href="tel:+12066052332"
              target="_blank"
              style={{ color: "white" }}
            >
              <i className="fa fa-phone" /> 1-206-605-2332
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link contact-link"
              href="mailto:webdevdn@hotmail.com"
              target="_blank"
              style={{ color: "white" }}
            >
              <i className="fa fa-envelope-o" /> webdevdn@hotmail.com
            </a>
          </Col>
          <Col>
            <Button className="resume" onClick={handleFileDownload}>
              Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
