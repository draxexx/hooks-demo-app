import { useState } from "react";

const SetStateComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>SetState</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default SetStateComponent;
