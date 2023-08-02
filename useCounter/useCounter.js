import React, { useState } from 'react'

export const useCounter = ( initialState = 10) => {

    const [counter, setCounter] = useState( initialState );

    const increment = ( value = 4) => {
        setCounter(counter + value);
    }

    const decrement = ( value = 2 ) => {
        if(counter === 0) return;
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter( initialState );
    }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
