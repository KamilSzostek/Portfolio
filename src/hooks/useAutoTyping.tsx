import { useEffect } from "react";
import { typeText } from "../assets/AutoTypingFunction";

const timeouts: NodeJS.Timeout[] = [];

export const useAutoTyping = (
  textLine: string,
  text: string,
  textHandler: Function,
  frequency: number
) => {
  useEffect(() => {
    if (timeouts.length > 0) {
      for (const timeout of timeouts) {
        clearTimeout(timeout);
      }
    }
    const timeout = setTimeout(
      () => typeText(textLine, text, textHandler),
      frequency
    );
    timeouts.push(timeout);
  }, [text]);
};
