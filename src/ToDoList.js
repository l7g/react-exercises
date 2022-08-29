import React from "react";

export class ToDoList extends React.Component {
  state = {
    items: ["Buy food", "Pet the dog", "Picchia dani"],
  };

  handleToDoSub = (event) => {
    event.preventDefault();
    const title = event.target.elements.username.value;
    
    this.setState((state) => {
        this.state.items.push(title);
        return {
            items: state.item
        }
    })
    
  }

  render() {
    let def = this.state.items.map((item) => <li>{item}</li>)
    return (
      <div>
        <form onSubmit={this.handleToDoSub}>
          <input name='username' type="text" />
          <button>Submit</button>
        </form>

        <div>
          <ul>{def}</ul>
        </div>
      </div>
    );
  }
}
