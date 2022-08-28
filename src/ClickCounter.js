import React from "react"

export class CounterButton extends React.Component {
    render() {
        return <button>Increment</button>
    }
}

export class ClickCounter extends React.Component {
    state = {
        count: 0
    }

    counterIncrement = (event) => {
        console.log(event)
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