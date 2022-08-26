import React from "react";

class CounterDisplay extends React.Component {
    render() {
        return <h1>{this.props.value}</h1>
    }
}

export class ClickCounter extends React.Component {
    state = {
        count: 0
    }

    counterIncrement = () => {
        this.setState((state) => {
            return {
                count: state.count + this.props.incrementBy
            }
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.counterIncrement}>Increment</button>
                <h3>Click count: {this.state.count}</h3>
            </div>
        )
    }
}

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy,
        };
      });
    }, this.props.intervalValue);
  }

  render() {
    return (
      <div>
        <h3>Count: {<CounterDisplay value={this.state.count}/>}</h3>
        <ClickCounter/>
      </div>
    );
  }
}

Counter.defaultProps = {
  incrementBy: 1,
  intervalValue: 1000,
};
ClickCounter.defaultProps = {
    incrementBy: 1
}
