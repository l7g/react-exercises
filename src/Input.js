import React from "react";

export class Input extends React.Component {
  state = {
    value: "",
  };

  cleanInput = () => {
    setInterval(() => {
      this.setState((state) => {
        return {
          value: "",
        };
      });
    }, 100);
  };

  handleToDoInput = (event) => {
    const value = event.target.value;

    this.setState((state) => {
      return {
        value: value,
      };
    });
  };

  render() {
    return (
      <div ref={this._div}>
        <input
          type="text"
          name="username"
          value={this.state.value}
          onChange={this.handleToDoInput}
        />
        <button onClick={this.cleanInput} type="submit">
          Submit
        </button>
      </div>
    );
  }
}
