import React from "react";
import Card from "./subcomponents/Card";
import './Projects.scss';

const Projects: React.FunctionComponent = (props) => {
  return (
    <section id="projects" className="projects">
      <h3>projekty</h3>
      <div className="projects__cards">
        <Card description="Projekt fikcyjnej siłowni - podsumowuje to czego  nauczyłem się w kursie Understanding TypeScript." />
        <Card
          description="Projekt sklepu odzieżowego - moja pierwsza aplikacja w React
        podsumowuje naukę tego frameworka. "
        />
      </div>
      <div className="projects__balls"/>
    </section>
  );
};

export default Projects;
