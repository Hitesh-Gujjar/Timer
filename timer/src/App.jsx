import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TimerList from "./Component/TimerList";
import AddTimer from "./Component/AddTimer";

function App() {
  const [timers, setTimers] = useState([]);

  const timersData=(timer)=>{
    setTimers((prevTimers) => [...prevTimers, timer])
    console.log("timersfdsfsd",timers)
  }

  const handleTimerDelete = (id) => {
    setTimers((prevValue) => prevValue.filter((timer) => timer.id !== id));
  };
  return (
      <div class="grid sm:grid-cols-2 max-sm:grid-cols-1 w-screen gap-4 h-screen mt-24">
      <div className="cols-span-2  max-sm:cols-span-1 mr-6 justify-self-end max-sm:justify-self-center mt-0">
        <TimerList timers={timers} onTimerOut={handleTimerDelete}></TimerList>
      </div>
      <div className="cols-span-2 max-sm:cols-span-1 max-sm:justify-self-center m-l6 mt-0">
        <AddTimer timers={timers} setTimers={setTimers} timersData={timersData} ></AddTimer>
      </div>
    </div>
  );
}

export default App;
