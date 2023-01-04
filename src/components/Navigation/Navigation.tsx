import React, { useRef, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import "./Navigation.scss";

interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  const [isOpen, setOpen] = useState(false);
  const closeNavList = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    setOpen(false);
    navListHandler();
  };
  const listRef = useRef<HTMLUListElement>(null);

  const navListHandler = () => {
    const list = listRef.current;
    if (!isOpen && window.innerWidth < 992) {
      if (list) list.classList.add("show-nav-list");
    } else {
      if (list) list.classList.remove("show-nav-list");
    }
  };
  return (
    <nav>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        onToggle={navListHandler}
        duration={0.5}
        rounded
      />
      <ul ref={listRef}>
        <li>
          <a href="#aboutme" onClick={closeNavList}>
            o mnie
          </a>
        </li>
        <li>
          <a href="#qualifications" onClick={closeNavList}>
            kwalfikacje
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeNavList}>
            projekty
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
