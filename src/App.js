import { Hello } from "./Hello";
import React from "react";
import { ToDoList } from "./ToDoList";
//import { InteractiveWelcome } from "./InteractiveWelcome";
//import { Login } from "./Login";
//import { UncontrolledLogin } from "./UncontrolledLogin";
//import { Color } from "./ColorsList";
//import { Message } from "./message";
//import { Welcome } from "./Welcome";
//import { Counter } from "./Counter";
//import { ClickTracker } from "./ClickTracker";

export class App extends React.Component {
  render() {
    return (
      <div>
        <React.StrictMode>
          <Hello />
          <ToDoList />
        </React.StrictMode>

        {/* <Message/>
                <InteractiveWelcome/>
                <Login/>
                <Color/>
                <UncontrolledLogin/>
                <Counter/>
                <ClickTracker/>
                <Welcome name={<strong>Laurent</strong>} age='20'/> */}
      </div>
    );
  }
}
