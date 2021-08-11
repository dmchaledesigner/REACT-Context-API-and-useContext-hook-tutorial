// 1. Import useState and createContent hooks
import { useState, createContext } from 'react';



// 2. create a variable holding the createContext hook and save immediate export
export const CounterContext = createContext()




// 3. Then create the contextProvider => note the uppercase naming convention
const CounterContextProvider = ({ children }) => { // children prop 

    // => our state and functions that we want to use globally go here


    // a. add state
    const [count, setCount] = useState(0);


    // b. add functions for increase and decrease
    const increaseCount = () => {
        // setCount(prevCount => prevCount + 1)
        setCount(count + 1)
    }

    const decreaseCount = () => {
        // setCount(prevCount => prevCount - 1)
        setCount(count - 1)
    }

    // c. place all the state and functions want to use in here and pass into the values prop inside the CounterContextProvider
    const values = { count, increaseCount, decreaseCount }


    // d. return Provider
    return (
        // Note the value prop must be added to hold the value state and functions 
        <CounterContext.Provider value={values}>
            {children}
        </CounterContext.Provider>
    );


}



export default CounterContextProvider;