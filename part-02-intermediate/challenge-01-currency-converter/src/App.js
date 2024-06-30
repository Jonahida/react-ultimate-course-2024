// Custom solution
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("1");
  const [fromType, setFromType] = useState("USD");
  const [toType, setToType] = useState("EUR");
  const [result, setResult] = useState("");

  function handleFromType(e) {
    setFromType(e.target.value);
  }

  function handleToType(e) {
    setToType(e.target.value);
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromType}&to=${toType}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data["rates"]) return;
          setResult(() => data["rates"][toType]);
          console.log(result);
        });
    }
    // console.log(amount);
    // console.log(fromType);
    // console.log(toType);
    if (fromType !== toType) fetchData();
  }, [amount, fromType, toType, result]);
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <SelectCurrency
        selectedCurrency={fromType}
        onSelectChange={handleFromType}
      />
      <SelectCurrency selectedCurrency={toType} onSelectChange={handleToType} />
      <p>OUTPUT: {result}</p>
    </div>
  );
}

function SelectCurrency({ selectedCurrency, onSelectChange }) {
  return (
    <select value={selectedCurrency} onChange={onSelectChange}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}
