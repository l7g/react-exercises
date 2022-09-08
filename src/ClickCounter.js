import React, { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const Languages = {
  en: { CURRENT_TRACKER: "Click count", CURRENT_BUTTON: "Increment" },
  it: { CURRENT_TRACKER: "Conteggio click", CURRENT_BUTTON: "Incrementa" },
};
export function ClickCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue); 
  
  useEffect(() => {onCounterChange(count)}, [count]);

  function counterIncrement() {
    setCount((count) => count + 1);
  }

  function onCounterChange(c){
    console.log(c);
  }
 

  return (
    <div>
      <LanguageContext.Consumer>
        {(Language) => {
          return (
            <div>
              <h3>{Languages[Language].CURRENT_TRACKER}: {count}</h3>
              <button onClick={counterIncrement}>{Languages[Language].CURRENT_BUTTON}</button>
            </div>
          );
        }}
      </LanguageContext.Consumer>
    </div>
  );
}
