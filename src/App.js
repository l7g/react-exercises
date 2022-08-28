import { Hello } from "./Hello";
import React from "react";
//import { InteractiveWelcome } from "./InteractiveWelcome";
//import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
//import { Message } from "./message";
//import { Welcome } from "./Welcome";
//import { Counter } from "./Counter";
//import { ClickTracker } from "./ClickTracker";

export class App extends React.Component{
    render() {
        return (
            <div>
                <Hello/>
                <UncontrolledLogin/>
                {/* <Message/>
                <InteractiveWelcome/>
                <Login/>
                <Counter/>
                <ClickTracker/>
                <Welcome name={<strong>Laurent</strong>} age='20'/> */}
            </div>
        );
    }
}