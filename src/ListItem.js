import React from "react";

export class ListItem extends React.Component {
  state = this.props.state.items

  render() {
    return <li>{this.props.render(this.state.items)}</li>;
  }
}
