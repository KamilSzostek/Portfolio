import * as React from "react";
import Mail from "../../utilities/icons/email.png";

interface IEmailProps {}

const Email: React.FunctionComponent<IEmailProps> = (props) => {
  return (
    <span className="email">
      <img src={Mail} alt="Adres mailowy" />
      szostekkamil19@gmail.com
    </span>
  );
};

export default Email;
