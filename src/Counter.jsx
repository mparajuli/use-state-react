import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <div className="card">
        <h1 className="card-heading">React Hook</h1>
        <p className="card-content">
          A React hook is a special function that allows you to incorporate
          state and other React features into functional components. Some
          examples of React hooks include useState, useEffect, useContext,
          useReducer, and useCallback.
        </p>
      </div>
      <div className="card">
        <h1 className="card-heading">useState()</h1>
        <p className="card-content">
          useState() is a React hook that enables the creation of a stateful
          variable within a functional component and provides a setter function
          to update its value over time. This allows the component to manage its
          state and trigger re-renders when the state changes in the virtual
          DOM.
        </p>
      </div>
      <div className="demo-card">
        <div className="counter-demo">
          <h3 className="counter-heading">
            Below is a counter component that uses react hook!
          </h3>
          <h1 className="counter-value">{count}</h1>
          <div className="counter-buttons">
            <button className="counter-button" onClick={decrementCount}>
              Decrement
            </button>
            <button className="counter-button" onClick={resetCount}>
              Reset
            </button>
            <button className="counter-button" onClick={incrementCount}>
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
