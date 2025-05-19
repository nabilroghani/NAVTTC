import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  function incCount() {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div>
      <h1>State in Reacts</h1>
      <p>count = {count}</p>
      <button onClick={incCount}>Increase</button>
    </div>
  );
}
export default Counter;
