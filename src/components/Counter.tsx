import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => ++prev);
  };

  return (
    <div>
      <span className={classes.count}>{count}</span>
      <button className={classes.button} onClick={handleClick}>
        increment
      </button>
    </div>
  );
};
