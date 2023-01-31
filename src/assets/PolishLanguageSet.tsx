import { INavigationLink, IContext } from "./StoreInterfaces";

export const navigationPL: INavigationLink[] = [
    { id: "#aboutme", sectionName: "o mnie" },
    { id: "#qualifications", sectionName: "kwalfikacje" },
    { id: "#projects", sectionName: "projekty" },
];
export const startPL: IContext = {
  text1: "Cześć, mam na imię",
  text2: "Kamil",
  text3: "Jestem początkującym",
  text4: "front end developerem",
};
export const aboutmePL: IContext = {
  text1: "o mnie",
  text2:
    "Jestem studentem czwartego roku na kierunku informatyka specjalizacja projektowanie aplikacji biznesowych. Program moich studiów skupiał się głównie na programowaniu backendu. Dzięki temu wiem trochę na temat baz danych oraz podstaw programowania w takich językach jak C# czy PHP. Po zakończonej sesji szóstego semestru uznałem że chciałbym nauczyć się tworzyć ciekawy frontend. Spodobało mi się tak bardzo, że w tym momencie jest to kierunek w którym chciałbym poprowadzić moją karierę.",
};
export const qualificationsPL: IContext = {
  text1: "kwalfikacje",
  text2:
    "Od lipca 2022 roku ukończyłem serie kursów po każdym tworząc projekt dla utrwalenia zdobytej wiedzy. Kursy które ukończyłem na Udemy:",
  text3: [
    "Kurs tworzenia stron internetowych cz.1",
    "Kurs tworzenia stron internetowych cz.2",
    "Kurs tworzenia stron internetowych cz.3",
    "Kurs Bootstrap",
    "Kurs programowania w javascript",
    "Kurs 10 projektów w czystym javascript - powyższe kursy zostały stworzone przez MMC school",
    "Kurs programowania w React utworzony przez Samuraja Programowania",
    "Understanding TypeScript - 2023 Edition stworzony i udostępniony przez Maximilian Schwarzmüller",
  ],
};
export const projectsPL: IContext = {
  text1: "projekty",
  text2:
    "Projekt fikcyjnej siłowni - podsumowuje to czego  nauczyłem się w kursie Understanding TypeScript.",
  text3:
    "Projekt sklepu odzieżowego - moja pierwsza aplikacja w React podsumowuje naukę tego frameworka. ",
};