import React from "react";

export class Container extends React.Component {
  render() {
    const containerStyle = {
        border: '2px solid red',
        backgroundColor: 'white',
        padding: '20px'
    }
    return (
      <div>
        <div style={containerStyle} className="container-content">{this.props.children}</div>
      </div>
    );
  }
}
