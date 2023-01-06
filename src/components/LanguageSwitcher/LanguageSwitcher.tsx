import * as React from "react";

interface ILanguageSwitcherProps {}

const LanguageSwitcher: React.FunctionComponent<ILanguageSwitcherProps> = (
  props
) => {
  return (
    <>
      <button>pl</button>
      <span>/</span>
      <button>en</button>
    </>
  );
};

export default LanguageSwitcher;
