import { useState, createContext } from 'react';



// create a variable holding the createContext() and have immediate export
export const CounterContext = createContext()






// then create the contextProvider => note the uppercase naming convention
const CounterContextProvider = ({ children }) => {

    // => our state and functions that we want to use globally go here


    // state
    const [count, setCount] = useState(0);


    // functions for increase and decrease
    const increaseCount = () => {
        // setCount(prevCount => prevCount + 1)
        setCount(count + 1)
    }

    const decreaseCount = () => {
        // setCount(prevCount => prevCount - 1)
        setCount(count - 1)
    }

    // place all the state and functions want to use in here and pass into the values prop inside the CounterContextProvider
    const values = { count, increaseCount, decreaseCount }


    return (
        // Note the value prop must be added to hold the value state and functions 
        <CounterContext.Provider value={values}>
            {children}
        </CounterContext.Provider>
    );


}

export default CounterContextProvider;