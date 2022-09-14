import { useCallback, useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const counterIncrement = useCallback(function counterIncrement() {
    setCount((c) => c + 1);
  }, [])

  const counterDecrement = useCallback(function counterDecrement() {
    setCount((c) => c - 1);
  }, [])

  const counterReset = useCallback(function counterReset() {
    setCount(initialValue);
  }, [initialValue])

  return {
    count: count,
    counterIncrement: counterIncrement,
    counterDecrement: counterDecrement,
    counterReset: counterReset,
  };
}
