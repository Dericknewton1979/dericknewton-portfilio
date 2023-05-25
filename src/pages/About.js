import React from "react";
import { Container } from "reactstrap";
import DerickProfile from "../app/assets/img/DerickProfile.png";
import logo1 from "../app/assets/img/logo.png";
import logo4 from "../app/assets/img/scrimba.png";
import logo5 from "../app/assets/img/general-assembly.png";

const About = () => {
  return (
    <Container>
      <div className="about-info">
        <h1>About Me:</h1>
      </div>
      <img className="profile-pic slide-in-left" src={DerickProfile}></img>
      <div>
        <h3
          className="about-me slide-in-right-delayed"
          style={{ animationDelay: "1s" }}
        >
          Hello, Allow me to introduce myself as Derick, an ardent web developer
          with a deep passion for constructing websites. My journey into the
          realm of web development commenced in 2022, when I immersed myself in
          a multitude of tutorial videos on esteemed platforms such as YouTube,
          Scrimba, and General Assembly. Subsequently, I resolved to augment my
          skills through an educational program offered by Nucamp, culminating
          in the successful completion of a comprehensive Full Stack Web/Mobile
          Development course. This immersive experience honed my proficiencies
          in essential technologies including HTML, CSS, JavaScript, Bootstrap,
          React, React Native, NodeJS, Express, and MongoDB. My fervor for
          learning remains undeterred, as I eagerly seek opportunities to expand
          my expertise across various facets of web development.
          <br /> <br />
          With great anticipation, I am poised to embark on the next chapter of
          my professional odyssey, where I aspire to translate my unwavering
          passion into a fulfilling career in the captivating domain of web
          development. The prospect of what lies ahead engenders a sense of
          excitement and eagerness within me, driving me to embrace new
          challenges and attain greater heights of accomplishment. With an
          insatiable thirst for knowledge and an unwavering commitment to
          excellence, I am fully prepared to navigate the dynamic landscape of
          this ever-evolving field, propelled by a steadfast determination to
          leave an indelible mark on the digital realm.
        </h3>
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
  );
};

export default About;
