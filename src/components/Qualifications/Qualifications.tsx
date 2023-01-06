import React, { useContext, useEffect, useRef } from "react";
import List from "./subcomponents/List";
import "./Qualifications.scss";
import { StoreContext } from "../../store/StoreProvider";

interface IQualifiactionsProps {}

const Qualifiactions: React.FunctionComponent<IQualifiactionsProps> = (
  props
) => {
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const { qualifications } = useContext(StoreContext);
  const title = qualifications?.text1 as string;
  const intro = qualifications?.text2 as string;

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
      <h3>{title}</h3>
      <div className="qualifications__text">
        <p className="opacity-0" ref={paragraphRef}>
          {intro}
        </p>
        <List />
      </div>
      <div className="qualifications__hero-bg" />
    </section>
  );
};

export default Qualifiactions;
