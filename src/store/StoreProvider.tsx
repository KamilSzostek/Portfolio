import React, { FC, createContext } from "react";
import {IData} from '../assets/StoreInterfaces'
import {navigation , start, aboutme, qualifications, projects} from '../assets/PolishLanguageSet'
import {navigationEN , startEN, aboutmeEN, qualificationsEN, projectsEN} from '../assets/EnglishLanguageSet'

interface Props {
  children?: React.ReactNode;
}

let data: IData = {};

export const StoreContext = createContext<IData>(data);

data = { navigation, start, aboutme, qualifications, projects };

export const StoreProvider: FC<Props> = ({ children }) => {
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};
