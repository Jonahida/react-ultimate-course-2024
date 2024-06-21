import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0); // Start from 0 for count to represent days from today
  const [date, setDate] = useState(new Date("Jun 26, 2027"));

  function handleCountBack() {
    setCount((prevCount) => prevCount - step);
    updateDate(-step);
  }

  function handleCountNext() {
    setCount((prevCount) => prevCount + step);
    updateDate(step);
  }

  function updateDate(days) {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    });
  }
  function handleChange(step) {
    setStep(step);
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => handleChange(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={handleCountBack}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountNext}>+</button>
      </div>
      <div>
        <p>
          {count} day{count === 1 ? "" : "s"} from today is{" "}
          {date.toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
