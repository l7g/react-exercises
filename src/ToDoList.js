import React from "react";
import { Input } from "./Input";

export class ToDoList extends React.Component {
  state = {
    items: ["Buy food", "Pet the dog", "Picchia dani"],
  };

  handleToDoSub = (event) => {
    event.preventDefault();
    let title = event.target.elements.username.value;
    this.setState((state) => {
        this.state.items.push(title);
        return {
            items: state.items
        }
    });
    console.log(event.target.elements)
  }

  

  render() {
      let def = this.state.items.map((item) => <li>{item}</li>)
    return (
      <div>
        <form onSubmit={this.handleToDoSub}>
          <Input/>
        </form>

        <div>
          <ul>{def}</ul>
        </div>
      </div>
    );
  }
}