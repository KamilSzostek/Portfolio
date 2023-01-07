import React, { FC, createContext, useState, useLayoutEffect } from "react";
import { IData } from "../assets/StoreInterfaces";
import {
  navigationPL,
  startPL,
  aboutmePL,
  qualificationsPL,
  projectsPL,
} from "../assets/PolishLanguageSet";
import {
  navigationEN,
  startEN,
  aboutmeEN,
  qualificationsEN,
  projectsEN,
} from "../assets/EnglishLanguageSet";
import { appRefresher } from "../App";

interface Props {
  children?: React.ReactNode;
}

const polishLanguageSet: IData = {
  navigation: navigationPL,
  start: startPL,
  aboutme: aboutmePL,
  qualifications: qualificationsPL,
  projects: projectsPL,
};
const englishLanguageSet: IData = {
  navigation: navigationEN,
  start: startEN,
  aboutme: aboutmeEN,
  qualifications: qualificationsEN,
  projects: projectsEN,
};
let data: IData = polishLanguageSet;

export const StoreContext = createContext<IData>(data);

export let languageHandler: (newLanguage: string) => void;

export const StoreProvider: FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState("");
  languageHandler = (newLanguage) => setLanguage(newLanguage);

  useLayoutEffect(() => {
    switch (language) {
      case "pl":
        data = polishLanguageSet;
        appRefresher();
        break;
      case "en":
        data = englishLanguageSet;
        appRefresher();
        break;
    }
  }, [language]);
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};
