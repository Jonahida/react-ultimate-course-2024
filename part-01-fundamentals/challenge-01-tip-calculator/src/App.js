import { useState } from "react";

function App() {
  const [bill, setBill] = useState(100);
  const [percentageOne, setPercentageOne] = useState(0.025);
  const [percentageTwo, setPercentageTwo] = useState(0.025);

  function handleBillChange(value) {
    setBill(value);
  }

  function handlePercentageOneChange(e) {
    setPercentageOne(Number(e.target.value) / 100);
  }
  function handlePercentageTwoChange(e) {
    setPercentageTwo(Number(e.target.value) / 100);
  }

  function handleReset() {
    setBill(0);
    setPercentageOne(0);
    setPercentageTwo(0);
  }

  return (
    <div>
      <BillInput bill={bill} onBillChange={handleBillChange} />
      <SelectPercentage onTipChange={handlePercentageOneChange}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage onTipChange={handlePercentageTwoChange}>
        How did your friend like the service?
      </SelectPercentage>
      <Output
        bill={bill}
        percentageOne={percentageOne}
        percentageTwo={percentageTwo}
      />
      <Reset onClickReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onBillChange }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        value={bill}
        placeholder="Bill value"
        onChange={(e) => onBillChange(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ onTipChange, children }) {
  return (
    <div>
      <span>{children}</span>
      <select onChange={onTipChange}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, percentageOne, percentageTwo }) {
  const totalPercentage = (percentageOne + percentageTwo) / 2;
  const tip = Math.round(100 * totalPercentage * bill) / 100;
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onClickReset }) {
  return <button onClick={onClickReset}>Reset</button>;
}

export default App;
