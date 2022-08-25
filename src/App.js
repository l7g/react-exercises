import { Hello } from "./Hello";
import React from "react";
import { Message } from "./message";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export class App extends React.Component{
    render() {
        return (
            <div>
                <Hello/>
                <Message/>
                <Counter/>
                <Welcome name={<strong>Laurent</strong>} age='20'/>
            </div>
        );
    }
}