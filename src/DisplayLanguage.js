import React from "react";
import { LanguageContext } from "./LanguageContext";

const Array = {
  en: { CURRENT_LANGUAGE: "You selected ENGLISH" },
  it: { CURRENT_LANGUAGE: "Hai selezionato ITALIANO" },
};

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(Language) => {
            return <h1>{Array[Language].CURRENT_LANGUAGE}</h1>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
