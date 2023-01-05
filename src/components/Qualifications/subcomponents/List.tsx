import React from "react";
import ListElement from "./ListElement";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface IListProps {}

const courses = [
  "Kurs tworzenia stron internetowych cz.1",
  "Kurs tworzenia stron internetowych cz.2",
  "Kurs tworzenia stron internetowych cz.3",
  "Kurs Bootstrap",
  "Kurs programowania w javascript",
  "Kurs 10 projektów w czystym javascript - powyższe kursy zostały stworzone przez MMC school",
  "Kurs programowania w React utworzony przez Samuraja Programowania",
  "Understanding TypeScript - 2023 Edition stworzony i udostępniony przez Maximilian Schwarzmüller",
];

const List: React.FunctionComponent<IListProps> = (props) => {
  const ListElements = courses.map((course) => (
    <ListElement
      key={Math.random() * courses.length}
      course={course}
      icon={faCheck}
    />
  ));
  return <ul>
    {ListElements}
  </ul>;
};

export default List;
