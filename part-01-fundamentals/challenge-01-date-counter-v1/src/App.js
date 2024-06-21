import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter1 />
    </div>
  );
}

function Counter1() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1); // Start from 0 for count to represent days from today
  const [date, setDate] = useState(new Date("Jun 26, 2027"));

  function handleStepBack() {
    setStep((prevStep) => Math.max(prevStep - 1, 1)); // Prevent step from going below 1
  }

  function handleStepNext() {
    setStep((prevStep) => prevStep + 1);
  }

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

  return (
    <div>
      <div>
        <button onClick={handleStepBack}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepNext}>+</button>
      </div>
      <div>
        <button onClick={handleCountBack}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}

function Counter2() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
