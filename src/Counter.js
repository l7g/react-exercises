import React, { useState, useEffect } from "react";

class CounterDisplay extends React.Component {
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

export class CounterButton extends React.Component {
  render() {
    return <button>Increment</button>;
  }
}

export function ClickCounter(){
  state = {
    count: 0,
  };

  counterIncrement = (event) => {
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementBy,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.counterIncrement}>Increment</button>
        <h3>Click count: {this.state.count}</h3>
      </div>
    );
  }
}

export function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    handleCounterIncrement();
    return () => {
      setCount((c) => c = 0)
    }
  }, []);

  function handleCounterIncrement() {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }

  const counterStyle = {
    color: count > 10 ? "green" : "blue",
  };
  return (
    <div style={counterStyle}>
      <h3>Count:</h3>
      <CounterDisplay value={count} />
      <ClickCounter />
    </div>
  );
}

Counter.defaultProps = {
  incrementBy: 1,
  intervalValue: 1000,
};
ClickCounter.defaultProps = {
  incrementBy: 1,
};
