import { LanguageContext } from "./LanguageContext";
import { useCounter } from "./useCounter";

const Languages = {
  en: {
    CURRENT_TRACKER: "Click count",
    CURRENT_INCREASE: "Increment",
    CURRENT_DECREASE: "Decrease",
  },
  it: {
    CURRENT_TRACKER: "Conteggio click",
    CURRENT_INCREASE: "Incrementa",
    CURRENT_DECREASE: "Diminuisci",
  },
};

export function ClickCounter({ initialValue = 0 }) {
  const { count, counterIncrement, counterDecrement, counterReset } = useCounter(initialValue);

  return (
    <div>
      <LanguageContext.Consumer>
        {(Language) => {
          return (
            <div>
              <h3>
                {Languages[Language].CURRENT_TRACKER}: {count}
              </h3>
              <button onClick={counterIncrement}>
                {Languages[Language].CURRENT_INCREASE}
              </button>
              <button onClick={counterDecrement}>
                {Languages[Language].CURRENT_DECREASE}
              </button>
              <button onClick={counterReset}>Reset</button>
            </div>
          );
        }}
      </LanguageContext.Consumer>
    </div>
  );
}
