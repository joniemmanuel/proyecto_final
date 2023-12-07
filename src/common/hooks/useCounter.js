import { useState } from "react";

export const useCounter = (initialCounter = 1) => {

    const [counter, setCounter] = useState(initialCounter);

    
    const increment = (max) => {
        setCounter(Math.min(counter + 1, max));     
    };
    
    const decrement = () => {
        setCounter(Math.max(counter - 1, 1));
    };
    

    return {
        counter,
        setCounter,
        increment,
        decrement
    }
}