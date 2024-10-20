import React from "react";

function Counter({ index, value }) {
  const [count, setCount] = React.useState(value);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter Number: {index}</h2>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
