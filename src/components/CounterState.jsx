import { useState, useEffect } from "react";

const CounterState = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('My Component is mounting...')
  }, [count]);
  return (
    <div>
      Count = {count}
      <br/>
      <button onClick={() => setCount(count + 1)}>Increment</button>&nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default CounterState;
