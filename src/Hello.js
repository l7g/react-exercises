import React from "react"; 
import { LanguageContext } from "./LanguageContext";

const Hellos = {
  en: {CURRENT_LANGUAGE: 'Hello, World'},
  it: {CURRENT_LANGUAGE: 'Ciao, Mondo'}
}

export class Hello extends React.Component {
  render() {
    return (
    <div>
      <LanguageContext.Consumer>
      {(Language) => {
            return <h1>{Hellos[Language].CURRENT_LANGUAGE}</h1>;
          }}
      </LanguageContext.Consumer>
    </div>
    );
  }
}
