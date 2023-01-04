import React from "react";
import './AboutMe.scss'

interface IAboutMeProps {}

const AboutMe: React.FunctionComponent<IAboutMeProps> = (props) => {
  return (
    <section id="aboutme" className="aboutme">
      <h3>o mnie</h3>
      <p>
        Jestem studentem czwartego roku na kierunku informatyka specjalizacja
        projektowanie aplikacji biznesowych. Program moich studiów skupiał się
        głównie na programowaniu backendu. Po zakończonej sesji szóstego
        semestru uznałem że chciałbym nauczyć się tworzyć ciekawy frontend. Tak
        mi się spodobało że w tym momencie to jest kierunek w którym chciałbym
        poprowadzić moją karierę.
      </p>
      <div className="aboutme__balls"/>
    </section>
  );
};

export default AboutMe;
