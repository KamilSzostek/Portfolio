import * as React from "react";
import Socials from "../Socials/Socials";
import Navigation from '../Navigation/Navigation';
import Linkedin from '../../utilities/icons/linkedin-white.png';
import Github from '../../utilities/icons/github-white.png';
import './Header.scss';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return <header>
    <Socials img1={Linkedin} img2={Github} />
    <Navigation/>
  </header>;
};

export default Header;
