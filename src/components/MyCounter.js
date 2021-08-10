// 1. import hook
import { useContext } from 'react';

// 2. import context file
import { CounterContext } from './contexts/CounterContext'; // import CounterContext File



const MyCounter = () => {

    // 3. create useContext instance and pull out what we need for the state to work 
    const { count, increaseCount, decreaseCount } = useContext(CounterContext)

    return (
        <div className="flex">
            <h2>Counter Component</h2>
            <p>The count is: <strong>{count}</strong></p>
            <div className="buttons">
                <button onClick={decreaseCount}>Decrease Count</button>
                <button onClick={increaseCount}>Increase Count</button>
            </div>
        </div>
    )
}

export default MyCounter
