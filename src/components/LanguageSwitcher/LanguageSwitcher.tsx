import React from "react";
import {languageHandler} from '../../store/StoreProvider';

interface ILanguageSwitcherProps {
  language: string;
}

const LanguageSwitcher: React.FunctionComponent<ILanguageSwitcherProps> = ({
  language,
}) => {
  const switchLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    languageHandler(language);
  };

  return (
    <>
      <button onClick={switchLanguage}>{language}</button>
    </>
  );
};

export default LanguageSwitcher;
