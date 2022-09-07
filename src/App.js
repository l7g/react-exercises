//import { Hello } from "./Hello";
import React from "react";
//import { ToDoList } from "./ToDoList";
//import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
//import { UncontrolledLogin } from "./UncontrolledLogin";
//import { Color } from "./ColorsList";
//import { Message } from "./message";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
//import { ClickCounter } from "./ClickCounter";
//import { DisplayLanguage } from "./DisplayLanguage";
//import { Sum } from "./Sum";
//import { Counter } from "./Counter";
//import { ClickTracker } from "./ClickTracker";


//const Numbers = [6, 90, 48, 63, 12]

export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState(() => {
      return {
        language: event.target.value,
      };
    });
  };
  render() {
    return (
      <div>
        <React.StrictMode>
          <div className="language-picker">
            <select
              value={this.state.language}
              onChange={this.handleLanguageChange}
            >
              <option value="en">ENGLISH</option>
              <option value="it">ITALIANO</option>
            </select>
          </div>

          <LanguageContext.Provider value={this.state.language}>
            <Container title="My App">
              <Welcome name="Laurent" />
              <Login/>
            </Container>
          </LanguageContext.Provider>
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
