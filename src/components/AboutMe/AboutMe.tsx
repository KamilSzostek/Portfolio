import React, { useEffect, useRef, useState } from "react";
import { typeText } from "../../assets/AutoTypingFunction";
import "./AboutMe.scss";

const textParagraph =
  "Jestem studentem czwartego roku na kierunku informatyka specjalizacja projektowanie aplikacji biznesowych. Program moich studiów skupiał się głównie na programowaniu backendu. Po zakończonej sesji szóstego semestru uznałem że chciałbym nauczyć się tworzyć ciekawy frontend. Spodobało mi się tak bardzo, że w tym momencie jest to kierunek w którym chciałbym poprowadzić moją karierę.";

interface IAboutMeProps {}

const AboutMe: React.FunctionComponent<IAboutMeProps> = (props) => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const textHandler = (prevState: string, letter: string) =>
    setText(prevState + letter);

  const sectionRef = useRef<HTMLElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current!;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        caretRef.current?.classList.remove("d-none");
      }
    });
    observer.observe(section);
  });

  useEffect(() => {
    if (isVisible)
      setTimeout(() => typeText(textParagraph, text, textHandler), 25);
  }, [isVisible, text]);

  return (
    <section id="aboutme" className="aboutme" ref={sectionRef}>
      <h3>o mnie</h3>
      <p>
        {text}{" "}
        {text != textParagraph && (
          <span className="caret d-none" ref={caretRef}>
            |
          </span>
        )}
      </p>
      <div className="aboutme__balls" />
    </section>
  );
};

export default AboutMe;
