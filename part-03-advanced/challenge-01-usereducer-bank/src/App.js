import { useReducer } from "react";
import "./styles.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  canCloseAccount: false,
};

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "openAccount":
        return {
          ...state,
          balance: action.payload,
          isActive: true,
          canCloseAccount: false,
        };

      case "deposit":
        return {
          ...state,
          balance: state.balance + action.payload,
          canCloseAccount:
            state.loan === 0 && state.balance + action.payload === 0,
        };

      case "withdraw":
        const newBalance =
          state.balance - action.payload >= 0
            ? state.balance - action.payload
            : state.balance;
        return {
          ...state,
          balance: newBalance,
          canCloseAccount: state.loan === 0 && newBalance === 0,
        };

      case "requestLoan":
        if (state.loan > 0) return state;
        return {
          ...state,
          balance: state.balance + action.payload,
          loan: action.payload,
          canCloseAccount: false,
        };

      case "payLoan":
        const updatedBalance = state.balance - state.loan;
        return {
          ...state,
          loan: 0,
          balance: updatedBalance,
          canCloseAccount: updatedBalance === 0,
        };

      case "closeAccount":
        if (state.loan !== 0 || state.balance !== 0) return state;
        return initialState;

      default:
        throw new Error("Unknown action");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const { balance, loan, isActive, canCloseAccount } = state;

  const openAccount = () => dispatch({ type: "openAccount", payload: 500 });
  const deposit = () => dispatch({ type: "deposit", payload: 150 });
  const withdraw = () => dispatch({ type: "withdraw", payload: 50 });
  const requestLoan = () => dispatch({ type: "requestLoan", payload: 5000 });
  const payLoan = () => dispatch({ type: "payLoan" });
  const closeAccount = () => dispatch({ type: "closeAccount" });

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button onClick={openAccount} disabled={isActive}>
          Open account
        </button>
      </p>
      <p>
        <button onClick={deposit} disabled={!isActive}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={withdraw} disabled={!isActive}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={requestLoan} disabled={!isActive}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={payLoan} disabled={!isActive}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={closeAccount} disabled={!canCloseAccount}>
          Close account
        </button>
      </p>
    </div>
  );
}
