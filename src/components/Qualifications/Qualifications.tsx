import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Qualifications.scss";

interface IQualifiactionsProps {}

const Qualifiactions: React.FunctionComponent<IQualifiactionsProps> = (
  props
) => {
  return (
    <section id="qualifications" className="qualifications">
      <h3>kwalifikacje</h3>
      <div className="qualifications__text">
        <p>
          Od lipca 2022 roku ukończyłem serie kursów po każdym tworząc projekt
          dla utrwalenia zdobytej wiedzy. Kursy które ukończyłem na Udemy:
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Kurs tworzenia stron internetowych cz.1{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Kurs tworzenia stron internetowych cz.2
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Kurs tworzenia stron internetowych cz.3{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Kurs Bootstrap{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Kurs programowania w javascript{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Kurs 10 projektów w czystym javascript - powyższe kursy zostały
            stworzone przez MMC school{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Kurs programowania w React utworzony przez Samuraja Programowania
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
           <span>Understanding TypeScript - 2023 Edition stworzony i udostępniony
            przez Maximilian Schwarzmüller</span> 
          </li>
        </ul>
      </div>
      <div className="qualifications__hero-bg" />
    </section>
  );
};

export default Qualifiactions;
