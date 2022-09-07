import React from "react";
import { Input } from "./Input";
import { List } from "./List";

export class ToDoList extends React.Component {
  state = {
    keys: ['01'],
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
      this.state.items.forEach((item) => {
        item.key = `${this.state.items.indexOf(item) + 1}`;
      });
      return {
        items: state.items,
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

  /* deleteItem = (event) => {
    let key = event.target.key;
    console.log('clicked')
    this.setState(() => {
      let newItems = [...this.state.items].filter(item => item.key !== key)
      return {
        items: newItems
      };
    });
  }; */

  deleteItem = (event) => this.setState((state) => {
    const items = [...state.items];
    items.splice(event.target.value, 1);
    return {
      items: items
    };
  })

  render() {

    return (
      
      <div key={this.state.keys[0]}>
        {/* <div>
        <form onSubmit={this.handleToDoSub}>
          <Input />
          <button onClick={this.clearList} type="button">
            Reset
          </button>
        </form>

        <div>
          <List
            list={this.state.items}
            render={({items, deleteItem}) => {
              
              return (
                <ul>
                  {items.map((item) => {
                    return (
                      <div>
                        <li key={item.key}>{item.task}</li>
                        <button
                          id={item.key}
                          type="button"
                          onClick={deleteItem}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </ul>
              );
            }}
          ></List>
        </div>
      </div> */}
        <ul>
          {this.props.render(this.state, this.deleteItem)}
        </ul>
        <form onSubmit={this.handleToDoSub}>
            <Input/>
            <button onClick={this.clearList} type="button">Clear</button>
        </form>
      </div>
    );
  }
}
