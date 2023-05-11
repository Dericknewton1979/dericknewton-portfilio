import React, { useState } from "react";
import { Container, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import logo1 from "../app/assets/img/logo.png";
import logo2 from "../app/assets/img/1800gotjunk-logo.png";
import logo3 from "../app/assets/img/fred-meyer-logo2.png";
import Mylogo from "../app/assets/img/Mylogo.PNG";

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (cardName) => {
    if (activeCard === cardName) {
      setActiveCard(null);
    } else {
      setActiveCard(cardName);
    }
  };

  return (
    <div>
      <Container>
        <div className="experience-info">
          <h1>Experience:</h1>
        </div>
        <ul className="job-links">
          <li onClick={() => handleClick("nucamp")}>Nucamp</li>
          <li onClick={() => handleClick("junk")}>1-800-GOT-JUNK?</li>
          <li onClick={() => handleClick("fredmeyer")}>FredMeyer</li>
        </ul>

        <div className="jobs">
          {activeCard === "nucamp" && (
            <CardBody className="nucamp">
              <img src={logo1} alt="nucamp logo" />
              <ul>
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
                <li>test 4</li>
              </ul>
            </CardBody>
          )}

          {activeCard === "junk" && (
            <CardBody className="junk">
              <img src={logo2} alt="got junk logo" />
              <ul>
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
                <li>test 4</li>
              </ul>
            </CardBody>
          )}

          {activeCard === "fredmeyer" && (
            <CardBody className="fredmeyer">
              <img src={logo3} alt="fredmeyer logo" />
              <ul>
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
                <li>test 4</li>
              </ul>
            </CardBody>
          )}
          {activeCard === null && (
            <CardBody className="derick-newton">
              <img src={Mylogo} alt="Derick Newton Logo" />
            </CardBody>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Experience;
