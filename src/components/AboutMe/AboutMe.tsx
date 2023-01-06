import React, { useContext, useEffect, useRef, useState } from "react";
import { typeText } from "../../assets/AutoTypingFunction";
import { StoreContext } from "../../store/StoreProvider";
import "./AboutMe.scss";

interface IAboutMeProps {}

const timeouts: NodeJS.Timeout[] = [];

const AboutMe: React.FunctionComponent<IAboutMeProps> = (props) => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const textHandler = (prevState: string, letter: string) =>
    setText(prevState + letter);

  const sectionRef = useRef<HTMLElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  const { aboutme } = useContext(StoreContext);
  const title = aboutme?.text1 as string;
  const textParagraph = aboutme?.text2 as string;

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

useEffect(()=>{
  setText('');
},[textParagraph])

useEffect(()=>{
  if(isVisible){
    if(timeouts.length > 0){
      for (const timeout of timeouts) {
        clearTimeout(timeout);
      }
    }
    const timeout = setTimeout(() => typeText(textParagraph, text, textHandler), 25);
    timeouts.push(timeout);
  }

},[isVisible, text])

  return (
    <section id="aboutme" className="aboutme" ref={sectionRef}>
      <h3>{title}</h3>
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
