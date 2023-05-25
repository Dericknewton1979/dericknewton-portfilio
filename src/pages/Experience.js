import React, { useState } from "react";
import { Container, Card, CardBody } from "reactstrap";
// import { Link } from "react-router-dom";
import logo1 from "../app/assets/img/logo.png";
import logo2 from "../app/assets/img/1800gotjunk-logo.png";
import logo3 from "../app/assets/img/fred-meyer-logo2.png";
import logo4 from "../app/assets/img/scrimba.png";
import logo5 from "../app/assets/img/general-assembly.png";
import Mylogo from "../app/assets/img/Mylogo.PNG";
import Bootstrap from "../app/assets/Bootstrap cert.pdf";
import DynamicReact from "../app/assets/Dynamic with react cert.pdf";
import WebDevFundamentals from "../app/assets/Wev Dev HTML,CSS,JS cert.pdf";
import ReactNative from "../app/assets/React Native cert.pdf";

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (cardName) => {
    if (activeCard === cardName) {
      setActiveCard(null);
    } else {
      setActiveCard(cardName);
    }
    setActiveCard(cardName);
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
            <CardBody
              className={`nucamp ${
                activeCard === "nucamp" ? "active fade-out" : ""
              }`}
            >
              <div className="logo-section">
                <h2>December 2022 - June 2024</h2>
                <img src={logo1} alt="nucamp logo" />
              </div>
              <ul>
                <li>Full Stack Web & Mobile Development Student.</li>
                <li>
                  Completed classes in HTML, CSS, JavaScript, Bootstrap, React,
                  React Native, Redux, Node.js, MongoDB and more.
                </li>
                <li>
                  Developed a strong understanding of software development best
                  practices including version control, debugging, testing and
                  documentation.
                </li>
                <li>
                  Collaborated with fellow students on group projects, honing
                  teamwork and communication skills in a collaborative coding
                  environment.
                </li>
                <li>
                  Participated in hands on coding projects, building real world
                  applications and gaining practical experience in full stack
                  and mobile development.{" "}
                </li>
              </ul>
              <div className="certificates">
                <ul>
                  <h1>Certificates</h1>
                  <li>
                    <a href={WebDevFundamentals} target="_blank">
                      Web Development Fundamentals
                    </a>
                  </li>
                  <li>
                    <a href={Bootstrap} target="_blank">
                      Bootstrap
                    </a>
                  </li>
                  <li>
                    <a href={DynamicReact} target="_blank">
                      Dynamic with React
                    </a>
                  </li>
                  <li>
                    <a href={ReactNative} target="_blank">
                      React Native
                    </a>
                  </li>
                  <li>
                    <a href="#">NodeJS/Express/MongoDB</a>
                  </li>
                </ul>
              </div>
            </CardBody>
          )}

          {activeCard === "junk" && (
            <CardBody
              className={`junk ${
                activeCard === "junk" ? "active fade-out" : ""
              }`}
            >
              <div className="logo-section">
                <h2>February 2016 - August 2022</h2>
                <img src={logo2} alt="got junk logo" />
              </div>
              <ul>
                <li>Served as General Manager for the Seattle WA Region.</li>
                <li>
                  Increased annual revenue over double in 5 years from 2.8
                  million to 6.2 million!
                </li>
                <li>
                  Coordinated schedules to gaurantee sufficient coverage,
                  managed customer relations to sustain good rapport and
                  constructed innovative strategies for business development,
                  expanding into new markets and growing clientele base.
                </li>
                <li>
                  Demonstrated effective management, leadership, coaching and
                  development of managers, shift supervisors and team leads.
                  <li>
                    Provided strategic direction to managers related to the
                    identification and support of under-performing teams to
                    ensure improvement plans were created and used.
                  </li>
                </li>
              </ul>
            </CardBody>
          )}

          {activeCard === "fredmeyer" && (
            <CardBody
              className={`fredmeyer ${
                activeCard === "fredmeyer" ? "active fade-out" : ""
              }`}
            >
              <div className="logo-section">
                <h2>November 2008 - February 2016</h2>
                <img src={logo3} alt="fredmeyer logo" />
              </div>
              <ul>
                <li>
                  Held the role of Food Division Manager, assigned with
                  directing the operations of several cross-functional
                  professional teams composed of over 100 employee's throughout
                  7+ departments.
                </li>
                <li>
                  Selected to join the regional leadership training team as a
                  coach and mentor to other managers from 2009 to 2016.
                </li>
                <li>
                  Regulated $50M+ in annual sales, executing strategies to
                  achieve an average 2% to 4% annual increase, managed losses
                  and profits, creating systems to boost profits continuously,
                  meeting and exceeding wage and sales goals.
                </li>
                <li>
                  Analyzed financial data including shortage to identify
                  business opportunities, determine proper action plan, and
                  increase sales.
                </li>
                <li>
                  Maintained working relationships with all vendors, monitored
                  and corrected delivery procedures, ensuring the accuracy of
                  orders.
                </li>
                <li>
                  Evaluated food service results and trends to determine the
                  proper action plans to leverage the stores food sales and
                  address areas of improvement, maintained 100% in-stock
                  efficiency on top selling items.
                </li>
              </ul>
            </CardBody>
          )}
          {activeCard === null && (
            <CardBody className="derick-newton">
              <img src={Mylogo} alt="Derick Newton Logo" />
            </CardBody>
          )}
        </div>
        <div className="logo-block">
          <a href="https://learn.nucamp.co/" target="_blank">
            <img src={logo1} alt="nucamp" />
          </a>
          <a href="https://scrimba.com/allcourses?price=free" target="_blank">
            <img src={logo4} alt="scrimba" />
          </a>
          <a
            href="https://generalassemb.ly/education?format=classes-workshops&topic=&mkt_account_id=1056949875&mkt_campaign_id=16726441626&mkt_ad_group_id=133811128726&mkt_device_type=m&mkt_keyword=coding%20certificate&mkt_matchtype=e&mkt_placement=&mkt_ad_id=590589524306&mkt_network=g&mkt_target_id=kwd-317306072291&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-nbr&utm_campaign=TS:TX:NBR:USA:TCLS:Coding:NonISA&utm_content=PDP-FT&utm_term=coding%20certificate:NonISA&gclid=Cj0KCQjwnP-ZBhDiARIsAH3FSRc8VXEYlmHj-FsXYmaPG4A76lXMXmcGHUq2qKIdYcA98ifhEowac1AaAjFnEALw_wcB&gclsrc=aw.ds"
            target="_blank"
          >
            <img src={logo5} alt="general-assembly" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
