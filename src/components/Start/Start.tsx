import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Email from "../Email/Email";
import Intro from "./subcomponents/Intro";
import { IntroRef } from "./subcomponents/Intro";
import "./Start.scss";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

interface IStartProps {}

const Start: React.FunctionComponent<IStartProps> = (props) => {
  const [isTyped, setIsTyped] = useState(false);

  const typingFinish = () => setIsTyped(true);

  const portraitRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<IntroRef>(null);
  const child2Ref = useRef<IntroRef>(null);

  const { start } = useContext(StoreContext);
  const line1 = start?.text1 as string;
  const line2 = start?.text2 as string;
  const line3 = start?.text3 as string;
  const line4 = start?.text4 as string;

  useEffect(()=>{
    setIsTyped(false)
  },[line1])
  
  return (
    <section id="start" className="start">
      <div className="start__top">
        <div className="start__top__languages">
          <LanguageSwitcher language="pl" />
          <span>/</span>
          <LanguageSwitcher language="en" />
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
