import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
state = {
    username: '',
}

handleInputChange = (event) => {
    const value = event.target.value;

    this.setState({
        username: value
    })
}

    render() {
        return (
            <div>
                <Welcome name={this.state.username}/>
                <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
            </div>
        )
    }
}