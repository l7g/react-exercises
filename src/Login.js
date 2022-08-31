import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
    }

    handleInput = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;
        const name = event.target.name;

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    onReset = () => {
        this.setState({
            username: '',
            password: '',
            remember: false,
        })
    }

    onLogin = () => {
        console.log(this.state)
    }

    render() {
        const buttonStyle = {
            background: this.state.password.length < 8 ? 'red' : 'green',
        }
        return (
             <div>
                <h3>Login</h3>
                <input name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInput}/>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInput}/>
                {this.state.username !== '' && this.state.password !== '' ? <button style={buttonStyle} onClick={this.onLogin}>Login</button> : <button disabled>Login</button>}
                {this.state.username !== '' && this.state.password !== '' ? <button onClick={this.onReset}>Reset</button> : <button disabled>Reset</button>}
             </div>
        );
    }
}