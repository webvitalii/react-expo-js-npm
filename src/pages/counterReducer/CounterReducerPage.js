import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setStep":
      return { ...state, step: action.payload };
    default:
      throw new Error();
  }
};

function CounterReducerPage() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleStepChange = (e) => {
    dispatch({ type: "setStep", payload: parseInt(e.target.value) });
  };

  return (
    <section className="counter-reducer-page">
      <h3>Count: {state.count}</h3>
      Step:{" "}
      <select onChange={handleStepChange} className="fx-input fx-input--inline">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={handleDecrement} className="fx-btn">
        Minus {state.step}
      </button>
      <button onClick={handleIncrement} className="fx-btn">
        Plus {state.step}
      </button>
    </section>
  );
}

export default CounterReducerPage;
