import React from "react";
import { Input } from "./Input";
import { List } from "./List";

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
    return (
      <div>
        <form onSubmit={this.handleToDoSub}>
          <Input />
          <button onClick={this.clearList} type="button">
            Reset
          </button>
        </form>

        <div>
        <List render={(items) => { 
          this.state.items.map((item) => {
            return (
              <div>
                List(items)
                <button id={item.key} onClick={this.deleteItem} type="button">Delete</button>
              </div>
            );
          });
          
        }}></List>
        </div>
      </div>
    );
  }
}
