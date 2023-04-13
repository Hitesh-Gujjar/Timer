import React, { useState } from "react";

const AddTimer = ({ timers = [], setTimers,timersData }) => {
  const [getSecond, setGetSecond] = useState("");

  const handleAddTimer = (e) => {
    e.preventDefault();
    
    const id = Math.random().toString(36).substr(2, 9);
    const createdDateTime = new Date()
      .toISOString()
      .replace("T", " ")
      .replace(/-/gi, ".");
    const availableTime = Math.floor(Date.now() / 1000) + Number(getSecond);
    let obj = {
      id: id,
      createdDateTime: createdDateTime,
      availableTime: availableTime,
    };
    timersData({id,createdDateTime,availableTime})
    setGetSecond("");
  };

  return (
    <div>
      <h2 className="my-6 text-lg font-semibold">New timer</h2>
      <input
        className="w-64 block h-12 border-2 border-gray-300 px-4"
        type="number"
        name="timer"
        value={getSecond}
        onChange={(e) => {
          setGetSecond(e.target.value);
        }}
        placeholder="Enter your name"
      />
      <button
        className="w-64 h-12 rounded-none bg-gray-300 px-4 my-6 hover:bg-gray-500"
        onClick={(e) => {
          handleAddTimer(e);
        }}
      >
        Add
      </button>
    </div>
  );
};
export default AddTimer;
