//import { Hello } from "./Hello";
import React, { useState } from "react";
//import { ToDoList } from "./ToDoList";
//import { InteractiveWelcome } from "./InteractiveWelcome";
//import { Login } from "./Login";
//import { UncontrolledLogin } from "./UncontrolledLogin";
//import { Color } from "./ColorsList";
//import { Message } from "./message";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
//import { ClickCounter } from "./ClickCounter";
//import { DisplayLanguage } from "./DisplayLanguage";
//import { Sum } from "./Sum";
import { Counter } from "./Counter";
//import { ClickTracker } from "./ClickTracker";

//const Numbers = [6, 90, 48, 63, 12]

export function App({ initialLanguage = "en" }) {
  const [language, setLanguage] = useState(initialLanguage);
  const [showCounter, setShowCounter] = useState(false);

  function handleToggle() {
    setShowCounter((s) => !s)
  }

  function handleLanguageChange(event) {
    setLanguage((l) => l = event.target.value);
  }
  return (
    <div>
      <React.StrictMode>
        <div className="language-picker">
          <select
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">ENGLISH</option>
            <option value="it">ITALIANO</option>
          </select>
        </div>

        <LanguageContext.Provider value={language}>
          <Container title="My App">
            <Welcome name="Laurent" />
            <button onClick={handleToggle}>Toggle</button>
            {showCounter && <Counter />}
          </Container>
        </LanguageContext.Provider>
      </React.StrictMode>

      {/* <Message/>
                <InteractiveWelcome/>
                <Welcome name={<strong>Laurent</strong>} age="20" />
                <ToDoList />
                <Color/>
                <UncontrolledLogin/>
                <ClickTracker/>*/}
    </div>
  );
}
