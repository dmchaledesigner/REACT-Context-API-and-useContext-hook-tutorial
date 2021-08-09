import { useContext } from 'react'; // import Counter Content
import { CounterContext } from './contexts/CounterContext'; // import CounterContext File




const MyCounter = () => {

    const { count, setCount, increaseCount, decreaseCount } = useContext(CounterContext)

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
