import React from "react";

export class Counter extends React.Component {
    state = {
        count: 0
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementBy
                }
            })
        }, this.props.intervalValue)
    } 

    render() {
        return <div>
            <h3>Count: {this.state.count}</h3>
        </div>
    }
}

Counter.defaultProps = {
    incrementBy: 1,
    intervalValue: 1000
}