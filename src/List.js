import React from "react";

export class List extends React.Component {
  state = {
    items: this.props.list
  }

  deleteItem = (event) => this.setState((state) => {
    const items = [...state.items];
    items.splice(event.target.value, 1);
    return {
      items: items
    };
  })


  render() {
    return <div>{this.props.render(this.state.items, this.deleteItem)}</div>;
  }
}
