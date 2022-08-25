import { Hello } from "./Hello";
import React from "react";
import { Message } from "./message";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render() {
        return (
            <div>
                <Hello/>
                <Message/>
                <Welcome name={<strong>Laurent</strong>} age='20'/>
            </div>
        );
    }
}