import React from "react";

export class UncontrolledLogin extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({ username, password, remember });
  };

  componentDidMount(){
    this.nameInput.focus();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref={(input) => { this.nameInput = input; }} name="username"/>
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
