import React from "react";

export class ClickTracker extends React.Component {
    state = {
        track: 'inactive'
    }

    trackLast = (event) => {
        console.log(event.target.innerText)
        this.setState((state) => {
            return {
                track: event.target.innerText
            }
        }) 
    }
    render() {
        return (
             <div>
                <button onClick={this.trackLast}>Primo</button>
                <button onClick={this.trackLast}>Secondo</button>
                <button onClick={this.trackLast}>Terzo</button>
                <h1>{this.state.track}</h1>
             </div>
        );
    }
}