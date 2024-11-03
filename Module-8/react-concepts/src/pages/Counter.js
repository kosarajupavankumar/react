import React, { useState } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidCatch() {
    console.log("Counter component componentDidMount");
  }

  componentDidUpdate() {
    console.log("Counter component componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Counter component componentWillUnmount");
  }

  render() {
    return (
      <div>
        <p>count : {this.state.count}</p>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}

/* const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}; */

export default Counter;
