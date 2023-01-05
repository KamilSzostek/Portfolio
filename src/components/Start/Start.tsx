import React, { useRef, useState } from "react";
import Email from "../Email/Email";
import Intro from "./subcomponents/Intro";
import { IntroRef } from "./subcomponents/Intro";
import "./Start.scss";

const line1 = "Cześć, mam na imię";
const line2 = "Kamil";
const line3 = "Jestem początkującym";
const line4 = "front end developerem";

interface IStartProps {}

const Start: React.FunctionComponent<IStartProps> = (props) => {
  const [isTyped, setIsTyped] = useState(false);

  const typingFinish = () => setIsTyped(true);

  const portraitRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<IntroRef>(null);
  const child2Ref = useRef<IntroRef>(null);

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
        <Intro
          textLine1={line1}
          textLine2={line2}
          ref={childRef}
          typing={typingFinish}
        />
      </div>
      {isTyped && <div className="start__portrait" ref={portraitRef} />}
      <div className="start__intro">
        {isTyped && (
          <Intro
            textLine1={line3}
            textLine2={line4}
            ref={child2Ref}
            frequency={100}
          />
        )}
      </div>
    </section>
  );
};

export default Start;
