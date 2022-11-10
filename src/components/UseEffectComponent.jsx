import { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count was changed to ${count}`);
  }, [count]);

  return (
    <div>
      <h1>UseEffect</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseEffectComponent;
