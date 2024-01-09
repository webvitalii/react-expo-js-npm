import { useState } from 'react';

function CounterPage() {
    const [count, setCount] = useState(0);
    const [valueToAdd, setValueToAdd] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        setValueToAdd(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCount(count + valueToAdd);
        setValueToAdd(0);
    };

    return(
        <section className='counter-page'>
            <h3>Counter Page</h3>
            <p>Count: {count}</p>
            
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={incrementCount}>Increment</button>

            <form onSubmit={handleSubmit}>
                <input type="number" 
                    value={valueToAdd || ''} 
                    onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
        </section>
    )
}

export default CounterPage;