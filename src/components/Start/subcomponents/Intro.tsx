import {
  forwardRef,
  RefObject,
  useEffect,
  useImperativeHandle,
  useState,
  useRef,
} from "react";
import TextLine from "./TextLine";
import { TextLineRef } from "./TextLine";

interface IIntroProps {
  textLine1: string;
  textLine2: string;
  frequency?: number;
  typing?: () => void;
}

export interface IntroRef {
  ref1: RefObject<TextLineRef>;
  ref2: RefObject<TextLineRef>;
}

const Intro = forwardRef<IntroRef, IIntroProps>(
  ({ textLine1, textLine2, frequency = 200, typing }, ref) => {
    const [isTyped, setIsTyped] = useState(false);
    const [isTyped2, setIsTyped2] = useState(false);

    const typingFinish = () => setIsTyped(true);
    const typing2Finish = () => setIsTyped2(true);

    const childRef = useRef<TextLineRef>(null);
    const child2Ref = useRef<TextLineRef>(null);

    useImperativeHandle(ref, () => ({
      ref1: childRef,
      ref2: child2Ref,
    }));

    useEffect(() => {
      if(isTyped2) {
        typing && typing()
      }
    });

    return (
      <h1>
        <TextLine textLine={textLine1} typing={typingFinish} ref={childRef} />
        {isTyped && (
          <TextLine
            textLine={textLine2}
            typing={typing2Finish}
            ref={child2Ref}
            frequency={frequency}
          />
        )}
      </h1>
    );
  }
);

export default Intro;
