import { useState } from 'react';

function CounterPage() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return(
        <section className='counter-page'>
            <h3>Counter Page</h3>
            <p>Count: {count}</p>
            
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={incrementCount}>Increment</button>
        </section>
    )
}

export default CounterPage;