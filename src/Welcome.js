import React from "react";
import { LanguageContext } from "./LanguageContext";

const Welcomes = {
  en: { CURRENT_LANGUAGE: "Welcome" },
  it: { CURRENT_LANGUAGE: "Benvenuto" },
};

export function Welcome({name}) {
  return (
    <div>
      <LanguageContext.Consumer>
        {(Language) => {
          return (
            <p>
              {Welcomes[Language].CURRENT_LANGUAGE}, {name}
            </p>
          );
        }}
      </LanguageContext.Consumer>
    </div>
  );
}

/* export class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <LanguageContext.Consumer>
          {(Language) => {
            return (
              <p>
                {Welcomes[Language].CURRENT_LANGUAGE}, {this.props.name}
              </p>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "John",
}; */
