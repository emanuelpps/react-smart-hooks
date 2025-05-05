import { useCallback, useState } from "react";

export function useToggle(
  initialValue: boolean = false
): [boolean, () => void] {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => setState((s) => !s), []);
  return [state, toggle];
}
