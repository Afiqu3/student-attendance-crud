import { useState, useReducer } from "react";
import {counterReducer} from "./Reducers/counter";

const App2 = () => {
  // const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <p>The value of counter is {counter}</p>
      <button onClick={() => dispatch(
        {
          type: "INCREASE_COUNTER_VALUE",
          payload: 1
        }
      )}>Increace by 1</button>
      <button onClick={() => dispatch(
        {
          type: "DECREASE_COUNTER_VALUE",
          payload: 1
        }
      )}>Decrease by 1</button>
      <button onClick={() => dispatch(
        {
          type: "INCREASE_COUNTER_VALUE",
          payload: 10
        }
      )}>Increace by 10</button>
      <button onClick={() => dispatch(
        {
          type: "DECREASE_COUNTER_VALUE",
          payload: 5
        }
      )}>Decrease by 5</button>
    </div>
  );
};

export default App2;
