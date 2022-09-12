import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function counterIncrement() {
    setCount((c) => c + 1);
  }

  function counterDecrement() {
    setCount((c) => c - 1);
  }

  function counterReset() {
    setCount(initialValue);
  }

  return {
    count: count,
    counterIncrement: counterIncrement,
    counterDecrement: counterDecrement,
    counterReset: counterReset,
  };
}
