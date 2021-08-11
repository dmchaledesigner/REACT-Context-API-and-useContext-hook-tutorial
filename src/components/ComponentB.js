import React from 'react';
import { useContext } from 'react';
import { CounterContext } from './contexts/CounterContext';

const ComponentB = () => {

    const { count, decreaseCount } = useContext(CounterContext)
    return (
        <div style={{ background: 'red', padding: '20px', textAlign: 'center' }}>

            <h2>Component B</h2>
            <p>The count is: <strong>{count}</strong></p>
            <div className="buttons">
                <button onClick={decreaseCount}>Decrease Count</button>
            </div>
        </div>
    )
}

export default ComponentB
