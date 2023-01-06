import React, { useContext, useRef, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { Spin as Hamburger } from "hamburger-react";
import ScrollButton from "./subcomponents/ScrollButton";
import "./Navigation.scss";

const sections = [
  { id: "#aboutme", sectionName: "o mnie" },
  { id: "#qualifications", sectionName: "kwalfikacje" },
  { id: "#projects", sectionName: "projekty" },
];

interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  const [isOpen, setOpen] = useState(false);
  const closeNavList = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(false);
    navListHandler();
    document.body
      .querySelector(`${event.currentTarget.getAttribute("id")}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const listRef = useRef<HTMLUListElement>(null);

  const {navigation} = useContext(StoreContext);

  const navListHandler = () => {
    const list = listRef.current;
    if (!isOpen && window.innerWidth < 992) {
      if (list) list.classList.add("show-nav-list");
    } else {
      if (list) list.classList.remove("show-nav-list");
    }
  };

  const listElements = navigation?.map((element) => (
    <li key={element.id}>
      <ScrollButton
        section={element.id}
        buttonName={element.sectionName}
        click={closeNavList}
      />
    </li>
  ));
  return (
    <nav>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        onToggle={navListHandler}
        duration={0.5}
        rounded
      />
      <ul ref={listRef}>{listElements}</ul>
    </nav>
  );
};

export default Navigation;
