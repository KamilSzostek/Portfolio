import React, { useEffect, useRef, useState } from "react";
import Email from "../Email/Email";
import "./Start.scss";

interface IStartProps {}

const Start: React.FunctionComponent<IStartProps> = (props) => {
  const text1 = "Cześć, mam na imię";
  const text2 = "Jestem początkującym";

  const [welcomeText, setWelcomeText] = useState("");
  const [introText, setIntroText] = useState("");

  const welcomeTextHandler = (prevState: string, letter: string) =>
    setWelcomeText(prevState + letter);
  const introTextHandler = (prevState: string, letter: string) =>
    setIntroText(prevState + letter);

  const introRef = useRef<HTMLDivElement>(null);
  const intro2Ref = useRef<HTMLDivElement>(null);
  const caret1Ref = useRef<HTMLSpanElement>(null);
  const caret2Ref = useRef<HTMLSpanElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => typeText(text1, welcomeText, welcomeTextHandler), 200);
  }, [welcomeText]);

  useEffect(() => {
    if (text1 == welcomeText) {
      caret1Ref.current?.classList.add('d-none')
      caret2Ref.current?.classList.remove('d-none')
      introRef.current?.classList.add("scale-up");
      setTimeout(() => portraitRef.current?.classList.add("scale-up"), 100);
      setTimeout(() => typeText(text2, introText, introTextHandler), 200);
    }
  });

  useEffect(() => {
    if (text2 == introText) {
      caret2Ref.current?.classList.add('d-none')
      intro2Ref.current?.classList.add("scale-up");
    }
  });

  const typeText = (text: string, newText: string, textHandler: Function) => {
    const text2 = text.substring(newText.length, text.length);
    const textArr = [...text2];
    for (const letter of textArr.reverse()) {
      textHandler(newText, letter);
    }
  };

  return (
    <section id="start" className="start">
      <div className="start__top">
        <div className="start__top__languages">
          <button>pl</button>
          <span>/</span>
          <button>en</button>
        </div>
        <Email />
      </div>
      <div className="start__welcome">
        <h1>
          {welcomeText}
          <span className="caret" ref={caret1Ref}>|</span>
          <br />
          <div ref={introRef}>
            <span className="start__welcome-name">Kamil</span>.
          </div>
        </h1>
      </div>
      <div className="start__portrait" ref={portraitRef} />
      <div className="start__intro">
        <h2>
          {introText} <span className="caret d-none" ref={caret2Ref}>|</span>
          <br />{" "}
          <div ref={intro2Ref}>
            <span className="start__welcome-name">front end developerem</span>.
          </div>
        </h2>
      </div>
    </section>
  );
};

export default Start;
