import React from "react";

interface IIntroProps {
    classes: string;
    text1: string;
    text2: string;
}

const Intro: React.FunctionComponent<IIntroProps> = ({classes, text1, text2}) => {
  return (
    <div className={classes}>
      <h1>
        {text1} <br />{" "}
        <div>
          <span className="start__welcome-name">{text2}</span>.
        </div>
      </h1>
    </div>
  );
};

export default Intro;
