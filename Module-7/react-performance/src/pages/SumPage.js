import React from 'react'

const generateLargeArray = () => {
    console.log(`Generating large array`);
    const array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i);
    }
    console.log(`Generated large array`);
    return array;
    };

    // it is will cause the pport performance since we need to render every time to generate the large array

/* const SumPage = () => {
    console.log('Inside SumPage');
    const [count , setCount ] = React.useState(0);

    const largeArray = generateLargeArray();
    const sum = largeArray.reduce((acc, curr) => acc + curr, 0);


    const onIncrement = () => {
        setCount(count + 1);
    }

  return (
    <div>
      <h1>Sum Page : {sum}</h1>
      <button onClick={onIncrement}>Increment</button>
        <p>Count: {count}</p>
    </div>
  )
} */

  // use memo to prevent the re-rendering of the large array
  const SumPage = () => {
    console.log('Inside SumPage');
    const [count , setCount ] = React.useState(0);

    const largeArray = React.useMemo(() => generateLargeArray(), []);
    const sum = largeArray.reduce((acc, curr) => acc + curr, 0);

    return (
        <div>
            <h1>Sum Page : {sum}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}


export default SumPage
