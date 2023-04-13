import React, { memo, useEffect, useState } from "react";
import Timer from "./Timer";

const TimerList = ({ timers=[],onTimerOut }) => {


  return (
    <>
      {timers.length >= 1 ?
        timers?.map((item, i) => (
          <Timer  
          key={item.id}
          id={item.id}
          createdDateTime={item.createdDateTime}
          availableTime={item.availableTime}
          onTimerOut={(id)=>onTimerOut(id)}
        />
        )):<div className="font-bold text-lg m-6">Timer Not set</div>}
    </>
  );
};
export default memo(TimerList);
