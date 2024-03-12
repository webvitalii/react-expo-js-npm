import { useState, useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return state - 1;
    case "increment":
      return state + 1;
    default:
      throw new Error();
  }
};

function CounterPage() {
  const [countR, dispatch] = useReducer(counterReducer, 0);
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <section className="counter-page">
      <h3>Count: {count}</h3>

      <button onClick={decrementCount} className="fx-btn">
        Minus
      </button>
      <button onClick={incrementCount} className="fx-btn">
        Plus
      </button>

      <div>
        <h3>Count with useReducer: {countR}</h3>

        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="fx-btn"
        >
          Minus
        </button>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="fx-btn"
        >
          Plus
        </button>
      </div>
    </section>
  );
}

export default CounterPage;
