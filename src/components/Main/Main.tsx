import * as React from "react";
import Start from '../Start/Start';
import AboutMe from '../AboutMe/AboutMe';
import Qualifications from '../Qualifications/Qualifications';
import Projects from '../Projects/Projects';

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (<main>
    <Start/>
    <AboutMe/>
    <Qualifications/>
    <Projects/>
  </main>);
};

export default Main;
