import React, { useState } from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { Route, Routes } from "react-router-dom";
import {ClickCounter} from './ClickCounter'
import {GithubUser} from './GithubUser'
import { useEffect } from "react";

//const Numbers = [6, 90, 48, 63, 12]

export function App({ initialLanguage = "en" }) {
  const [language, setLanguage] = useState(initialLanguage);
  const [showCounter, setShowCounter] = useState(false);

  const [actualUser, setActualUser] = useState('l7g');

  function handleToggle() {
    setShowCounter((s) => !s);
  }

  function handleLanguageChange(event) {
    setLanguage((l) => (l = event.target.value));
  }
  return (
    <div>
      <Container>
      <Routes>
        <Route path="/" element={<Welcome name='Laurent'/>}/>
        <Route path="counter" element={<ClickCounter />}/>
        <Route path={`users/:${actualUser}`} element={<GithubUser username={actualUser}/>}/>
      </Routes>
      </Container>
    </div>
  );
}
