import React, { useEffect } from "react";
import { typeText } from "../assets/AutoTypingFunction";

export const useAutoTyping = (
  textLine: string,
  text: string,
  textHandler: Function,
  frequency: number
) => {
  useEffect(() => {
    setTimeout(() => typeText(textLine, text, textHandler), frequency);
  }, [text]);
};
