import React from "react";

const colors = [{id: 1, name: 'Green'}, {id: 2, name: 'Red'}, {id: 3, name: 'Blue'}, {id: 4, name: 'Yellow'}]

export class Color extends React.Component {

    render() {
        const items = colors.map((item) => <li key={item.id}>{item.name}</li>)
        return (
             <div>
                <ul>{items}</ul>
             </div>
        );
    }
}