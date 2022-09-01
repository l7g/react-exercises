import React from "react";
import { Input } from "./Input";

export class ToDoList extends React.Component {
  state = {
    items: [
      { key: "1", task: "Buy food" },
      { key: "2", task: "Pet the dog" },
      { key: "3", task: "Picchia dani" },
    ],
   
  };

  handleToDoSub = (event) => {
    event.preventDefault();
    let title = event.target.elements.username.value;
    let key = this.state.items.length + 1;
    let obj = { key: `${key}`, task: title };
    this.state.items.push(obj);
    this.setState((state) => {
      this.state.items.forEach(item => {
        item.key = `${this.state.items.indexOf(item) + 1}`
      })
      return {
        items: state.items
      };
    });
  };

  clearList = () => {
    this.setState(() => {
      return {
        items: [],
      };
    });
  };

  deleteItem = (event) => {
    let key = event.target.id;
    this.setState(() => {
      let newItems = this.state.items.filter(item => item.key !== key)
      return {
        items: newItems
      };
    });
  };

  render() {
    let def = this.state.items.map((item) => {
      return (
        <div>
          <li>{item.task}</li>
          <button id={item.key} onClick={this.deleteItem} type="button">Delete</button>
        </div>
      );
    });
    return (
      <div>
        <form onSubmit={this.handleToDoSub}>
          <Input />
          <button onClick={this.clearList} type="button">
            Reset
          </button>
        </form>

        <div>
          <ul>{def}</ul>
        </div>
      </div>
    );
  }
}
