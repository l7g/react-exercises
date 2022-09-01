import { Hello } from "./Hello";
import React from "react";
import { ToDoList } from "./ToDoList";
//import { InteractiveWelcome } from "./InteractiveWelcome";
//import { Login } from "./Login";
//import { UncontrolledLogin } from "./UncontrolledLogin";
//import { Color } from "./ColorsList";
//import { Message } from "./message";
//import { Welcome } from "./Welcome";
import { Container } from "./Container";
//import { Counter } from "./Counter";
//import { ClickTracker } from "./ClickTracker";

export class App extends React.Component {
  render() {
    return (
      <div>
        <React.StrictMode>
          <Container title="My App">
            <ToDoList></ToDoList>
            <Hello />
          </Container>
        </React.StrictMode>

        {/* <Message/>
                <InteractiveWelcome/>
                <Welcome name={<strong>Laurent</strong>} age="20" />
                <ToDoList />
                <Color/>
                <UncontrolledLogin/>
                <Counter/>
                <ClickTracker/>*/}
      </div>
    );
  }
}
