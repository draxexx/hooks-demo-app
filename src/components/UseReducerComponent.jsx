import { useReducer } from "react";
import reducerHook from "../hooks/reducer";

const UseReducerComponent = () => {
  const [count, dispatch] = useReducer(reducerHook, 0);
  return (
    <div>
      <h1>UseReducer</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducerComponent;
