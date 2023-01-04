import React from "react";

interface ICardProps {
  description: string;
}

const Card: React.FunctionComponent<ICardProps> = ({ description }) => {
  return (
    <a href="https://kamilszostek.github.io/secret-power/" className="projects__cards__card">
        <p>{description}</p>
    </a>
  );
};

export default Card;
