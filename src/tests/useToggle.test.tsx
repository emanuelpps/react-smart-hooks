import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useToggle } from "../useToggle";

describe("useToggle hook", () => {
  it("should initialize with default value false", () => {
    const { result } = renderHook(() => useToggle());
    const [state] = result.current;
    expect(state).toBe(false);
  });

  it("should initialize with the provided initial value", () => {
    const { result } = renderHook(() => useToggle(true));
    const [state] = result.current;
    expect(state).toBe(true);
  });

  it("should toggle the state from false to true", () => {
    const { result } = renderHook(() => useToggle(false));
    const [, toggle] = result.current;

    act(() => {
      toggle();
    });

    const [state] = result.current;
    expect(state).toBe(true);
  });

  it("should toggle the state from true to false", () => {
    const { result } = renderHook(() => useToggle(true));
    const [, toggle] = result.current;

    act(() => {
      toggle();
    });

    const [state] = result.current;
    expect(state).toBe(false);
  });
});
