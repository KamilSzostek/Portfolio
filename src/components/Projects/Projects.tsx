import React, { useContext } from "react";
import Card from "./subcomponents/Card";
import "./Projects.scss";
import { StoreContext } from "../../store/StoreProvider";

const Projects: React.FunctionComponent = (props) => {
  const { projects } = useContext(StoreContext);
  const title = projects?.text1 as string;
  const projectDescription1 = projects?.text2 as string;
  const projectDescription2 = projects?.text3 as string;

  return (
    <section id="projects" className="projects">
      <h3>{title}</h3>
      <div className="projects__cards">
        <Card description={projectDescription1} />
        <Card
          description={projectDescription2}
        />
      </div>
      <div className="projects__balls" />
    </section>
  );
};

export default Projects;
