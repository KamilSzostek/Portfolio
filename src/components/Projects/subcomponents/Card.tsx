import React from "react";

interface ICardProps {
  link: string;
  description: string;
}

const Card: React.FunctionComponent<ICardProps> = ({ link, description }) => {
  return (
    <a href={link} className="projects__cards__card">
      <p>{description}</p>
    </a>
  );
};

export default Card;
