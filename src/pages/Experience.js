import React from "react";
import { Container, Card, CardBody } from "reactstrap";
import logo1 from "../app/assets/img/logo.png";
import logo2 from "../app/assets/img/1800gotjunk-logo.png";
import logo3 from "../app/assets/img/fred-meyer-logo2.png";

const Experience = () => {
  return (
    <div>
      <Container>
        <div className="experience-info">
          <h1>Experience:</h1>
        </div>
        <CardBody className="nucamp">
          <img src={logo1} alt="nucamp logo" />
          <ul>
            <li>test 1</li>
            <li>test 2</li>
            <li>test 3</li>
            <li>test 4</li>
          </ul>
        </CardBody>

        <CardBody className="junk">
          <img src={logo2} alt="got junk logo" />
          <ul>
            <li>test 1</li>
            <li>test 2</li>
            <li>test 3</li>
            <li>test 4</li>
          </ul>
        </CardBody>

        <CardBody className="fredmeyer">
          <img src={logo3} alt="fredmeyer logo" />
          <ul>
            <li>test 1</li>
            <li>test 2</li>
            <li>test 3</li>
            <li>test 4</li>
          </ul>
        </CardBody>
      </Container>
    </div>
  );
};

export default Experience;
