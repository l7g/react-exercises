import { Hello } from "./Hello";
import React from "react";
//import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
//import { Message } from "./message";
//import { Welcome } from "./Welcome";
//import { Counter } from "./Counter";
//import { ClickTracker } from "./ClickTracker";

export class App extends React.Component{
    render() {
        return (
            <div>
                <Hello/>
                <Login/>
                {/* <Message/>
                <InteractiveWelcome/>
                <Counter/>
                <ClickTracker/>
                <Welcome name={<strong>Laurent</strong>} age='20'/> */}
            </div>
        );
    }
}