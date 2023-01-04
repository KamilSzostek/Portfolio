import React from "react";
import Socials from "../Socials/Socials";
import Linkedin from "../../utilities/icons/linkedin.png";
import Github from "../../utilities/icons/github.png";
import Email from "../Email/Email";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer: React.FunctionComponent = (props) => {
  return (
    <footer className="footer">
      <div className="footer__header">
        <div
          className="footer__header__arrow"
          onClick={() => window.scrollTo(0, 0)}>
          <FontAwesomeIcon icon={faChevronUp} />
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
      <p className="footer__copy">
        {new Date().getFullYear()} &copy;
      </p>
      <Email />
      <Socials img1={Linkedin} img2={Github} />
    </footer>
  );
};

export default Footer;
