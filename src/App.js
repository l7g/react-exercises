import { Hello } from "./Hello";
import React from "react";
import { Message } from "./message";

export class App extends React.Component{
    render() {
        return (
            <div>
                <Hello/>
                <Message/>
            </div>
        );
    }
}