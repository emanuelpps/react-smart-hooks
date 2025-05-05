/* eslint-disable no-unused-vars */
import { useState } from "react";

export function useLocalStorage<T>(
    key: string,
    initialValue: T
  ): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch {null}
  };

  return [storedValue, setValue];
}
