import React, { useEffect, useRef } from "react";
import List from "./subcomponents/List";
import "./Qualifications.scss";

interface IQualifiactionsProps {}

const Qualifiactions: React.FunctionComponent<IQualifiactionsProps> = (
  props
) => {
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current!;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        paragraphRef.current?.classList.remove("opacity-0");
      }
    });
    observer.observe(section);
  });

  return (
    <section id="qualifications" className="qualifications" ref={sectionRef}>
      <h3>kwalifikacje</h3>
      <div className="qualifications__text">
        <p className="opacity-0" ref={paragraphRef}>
          Od lipca 2022 roku ukończyłem serie kursów po każdym tworząc projekt
          dla utrwalenia zdobytej wiedzy. Kursy które ukończyłem na Udemy:
        </p>
        <List />
      </div>
      <div className="qualifications__hero-bg" />
    </section>
  );
};

export default Qualifiactions;
