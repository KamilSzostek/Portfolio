import React, { useContext } from "react";
import ListElement from "./ListElement";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../../store/StoreProvider";

interface IListProps {}

const List: React.FunctionComponent<IListProps> = (props) => {
  const { qualifications } = useContext(StoreContext);
  const courses = qualifications?.text3 as string[];
  const ListElements = courses.map((course) => (
    <ListElement
      key={Math.random() * courses.length}
      course={course}
      icon={faCheck}
    />
  ));
  return <ul>{ListElements}</ul>;
};

export default List;
