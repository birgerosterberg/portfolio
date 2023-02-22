import { useState, useEffect } from "react";

const TimedText = ({ text, time }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, time);
  }, [time]);

  return showText ? <>{text}</> : null;
};

export default TimedText;
