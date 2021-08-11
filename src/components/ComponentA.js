import React from 'react';
import { useContext } from 'react';
import { CounterContext } from './contexts/CounterContext';

const ComponentA = () => {


    const { count } = useContext(CounterContext)


    return (
        <div style={{ width: '100%', textAlign: 'center', marginTop: '70px' }}>
            <h2>Component A</h2>
            <p style={{ fontSize: '26px' }}>{count}</p>
        </div>
    )
}

export default ComponentA
