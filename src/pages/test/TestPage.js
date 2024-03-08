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
      <h3>Test Page</h3>
      <p>Count: {count}</p>

      <button onClick={decrementCount} className="fx-btn">
        Decrement
      </button>
      <button onClick={incrementCount} className="fx-btn">
        Increment
      </button>
    </section>
  );
}

export default CounterPage;
