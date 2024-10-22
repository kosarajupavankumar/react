import React from "react";

const DocumentCounter = () => {
  console.log(`DocumentCounter rendered`);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log(`useEffect called`);
    document.title = `You clicked ${count} times`;
  }, [count]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log(`Timer called `);
    }, 1000);

    return () => {
      console.log(
        `I will be called just before the component is removed to be destroyed`
      );

      clearInterval(timer);
    };
  }, []);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  console.log(`Redendering UI`);
  return (
    <div>
      <p>You clicked {count} times</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default DocumentCounter;
