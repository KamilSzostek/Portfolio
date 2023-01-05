import React, {useEffect, useRef} from "react";
import {
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IListElementProps {
  course: string;
  icon: IconDefinition;
}

const ListElement: React.FunctionComponent<IListElementProps> = ({
  course,
  icon,
}) => {

const elementRef = useRef<HTMLLIElement>(null);
const iconRef = useRef<SVGSVGElement>(null);
const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current!;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        iconRef.current?.classList.add('none-transform-delay');
        spanRef.current?.classList.remove('opacity-0')
        element.classList.add('none-transform-delay')
      }
    });
    observer.observe(element);
  });
  return (
    <li ref={elementRef}>
      <FontAwesomeIcon icon={icon} ref={iconRef}/>
      <span className="opacity-0" ref={spanRef}>{course}</span>
    </li>
  );
};

export default ListElement;
