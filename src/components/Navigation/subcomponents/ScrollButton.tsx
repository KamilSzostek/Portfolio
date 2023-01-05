import React from "react";
import '../Navigation.scss';

interface IScrollButtonProps {
  buttonName: string;
  section: string;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ScrollButton: React.FunctionComponent<IScrollButtonProps> = ({
  section,
  buttonName,
  click,
}) => {
  return <button id={section} onClick={click}>{buttonName}</button>;
};

export default ScrollButton;
