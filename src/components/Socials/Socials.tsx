import React from "react";

interface ISocialsProps {
    img1: string;
    img2: string;
}

const Socials: React.FunctionComponent<ISocialsProps> = ({img1, img2}) => {
  return (
    <div className="socials">
      <a href="https://linkedin.com/in/kamil-szostek-8b43b6260">
        <img src={img1} alt="linkedin" />
      </a>
      <a href="https://github.com/KamilSzostek">
        <img src={img2} alt="github" />
      </a>
    </div>
  );
};

export default Socials;
