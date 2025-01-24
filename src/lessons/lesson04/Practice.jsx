import { useState } from "react";

export default function Practice() {
  let [IsDayTime, setIsDayTime] = useState(true);

  const isDay = () => {
    setIsDayTime(true);
  };

  const isNight = () => {
    setIsDayTime(false);
  };

  return (
    <div>
      <h2>React useState() hook 🪝</h2>
      <div className="counter">
        <button onClick={isNight}>Night</button>
        <span>
          {IsDayTime ? "Day🥳" : "Night🌛"}
          </span>
        <button onClick={isDay}>Day</button>
      </div>
    </div>
  );
}
