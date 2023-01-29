import { useState, useEffect } from "react";

const TimedText = ({ text, time }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, time);
  }, [time]);

  return showText ? <>{text}</> : <><span className="animate-[pulse_2s_infinite] font-extrabold text-3xl">.</span><span className="animate-[pulse_4s_infinite] font-extrabold text-3xl">.</span><span className="animate-[pulse_6s_infinite] font-extrabold text-3xl">.</span><br></br></>;
};

export default TimedText;
