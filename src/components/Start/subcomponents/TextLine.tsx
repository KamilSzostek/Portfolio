import {
  forwardRef,
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useAutoTyping } from "../../../hooks/useAutoTyping";

interface ITextLineProps {
  textLine: string;
  frequency?: number;
  typing?: () => void;
}

export interface TextLineRef {
  ref1: RefObject<HTMLSpanElement>;
  ref2: RefObject<HTMLSpanElement>;
}

const TextLine = forwardRef<TextLineRef, ITextLineProps>(
  ({ textLine, frequency = 200, typing }, ref) => {
    const [text, setText] = useState("");

    const textHandler = (prevState: string, letter: string) =>
      setText(prevState + letter);

    const spanRef = useRef<HTMLSpanElement>(null);
    const caretRef = useRef<HTMLSpanElement>(null);

    useImperativeHandle(ref, () => ({
      ref1: spanRef,
      ref2: caretRef,
    }));

    useAutoTyping(textLine, text, textHandler, frequency);
    useEffect(() => {
      if (textLine === text) {
        caretRef.current?.classList.add("d-none");
        if (typing) typing();
      }
    }, [text]);
    return (
      <div>
        <span>{text}</span>
        <span className="black-line" ref={spanRef}/>
        <span className="caret" ref={caretRef}>
          |
        </span>
      </div>
    );
  }
);

export default TextLine;
