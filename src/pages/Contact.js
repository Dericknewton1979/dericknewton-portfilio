import React from "react";
import { Container } from "reactstrap";
import logo1 from "../app/assets/img/logo.png";
import logo4 from "../app/assets/img/scrimba.png";
import logo5 from "../app/assets/img/general-assembly.png";

const Contact = () => {
  return (
    <Container>
      <h1>Contact</h1>
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

export default Contact;
