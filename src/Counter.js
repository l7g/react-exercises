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
                    count: state.count + 1
                }
            })
        }, 1000)
    } 

    render() {
        return <div>
            <h3>Count: {this.state.count}</h3>
        </div>
    }
}