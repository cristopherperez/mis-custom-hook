import { useState } from 'react';

export const useCounter = (initialState = 10) => {

  const [counter, setCounter] = useState(initialState); //el state seria 10
  // const [state, setState] = useState(initialState); //el state seria 10

  const increment = () => {
    setCounter(counter + 1)
  };
  // const increment = (factor = 1) => {
  //   setState(state + factor)
  // };
  const decrement = () => {
    setCounter(counter - 1)
  };
  // const decrement = (factor = 1) => {
  //   setState(state - factor)
  // };
  const reset = () => {
    setCounter(initialState)
  }

  return {
    counter, //state
    increment,
    decrement,
    reset
  }
}
