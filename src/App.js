import React, { useState } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { ClickCounter } from "./ClickCounter";

//const Numbers = [6, 90, 48, 63, 12]

export function App({ initialLanguage = "en" }) {
  const [language, setLanguage] = useState(initialLanguage);
  const [showCounter, setShowCounter] = useState(false);

  function handleToggle() {
    setShowCounter((s) => !s);
  }

  function handleLanguageChange(event) {
    setLanguage((l) => (l = event.target.value));
  }
  return (
    <div>
      <React.StrictMode>
        <div className="language-picker">
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">ENGLISH</option>
            <option value="it">ITALIANO</option>
          </select>
        </div>

        <LanguageContext.Provider value={language}>
          <Container title="My App">
            <Welcome name="Laurent" />
            <ClickCounter />
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
