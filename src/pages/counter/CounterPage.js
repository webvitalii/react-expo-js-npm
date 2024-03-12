import { useState } from "react";

function CounterPage() {
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
    </section>
  );
}

export default CounterPage;
