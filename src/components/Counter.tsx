import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => ++prev);
  };

  return (
    <div>
      <span className="count">{count}</span>
      <button className="button" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};
