import React, { useState, useEffect } from "react";

function Timer({ id, createdDateTime, availableTime, onTimerOut }) {
  const [remainingTime, setRemainingTime] = useState(
    Math.max(availableTime - Math.floor(Date.now() / 1000), 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingSeconds) =>
        Math.max(prevRemainingSeconds - 1, 0)
      );
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      onTimerOut(id);
    }
  }, [remainingTime, id]);

  //   const date = new Date(createdDateTime).toLocaleString();
  const availablTime = (remainingTime / 100).toFixed(2);

  return (
    <div
      className="max-w-lg rounded overflow-hidden  bg-gray-300 shadow-lg flex mb-2"
      key={id}
    >
      <div className="px-6 mx-6 py-4">
        <div className="font-bold text-xl mb-2 ">{availablTime}</div>
        <p className="text-gray-700 text-base">
          {createdDateTime.substring(0, createdDateTime.length - 1)}
        </p>
      </div>
      <div className="teact-lg font-bold px-2 pt-1">
        {" "}
        <span
          className="hover:bg-gray-500 rounded-full h-8 w-8 flex items-center justify-center"
          onClick={() => onTimerOut(id)}
        >
          X
        </span>
      </div>
    </div>
  );
}

export default Timer;
