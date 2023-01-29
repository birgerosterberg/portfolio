import { useState, useEffect } from "react";

const Timer = () => {
    
    const [counter,setCounter] = useState(0);

  useEffect(() => {
     setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);});

return(
    <span className="pl-1">{counter}s</span>
    );
};

export default Timer;