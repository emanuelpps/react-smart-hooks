import { act,renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  const key = 'test-key';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should return the initial value if no localStorage value exists', () => {
    const { result } = renderHook(() => useLocalStorage(key, 'initial'));
    expect(result.current[0]).toBe('initial');
  });

  it('should return the value from localStorage if it exists', () => {
    localStorage.setItem(key, JSON.stringify('stored'));
    const { result } = renderHook(() => useLocalStorage(key, 'initial'));
    expect(result.current[0]).toBe('stored');
  });

  it('should update localStorage when setValue is called', () => {
    const { result } = renderHook(() => useLocalStorage(key, 'initial'));

    act(() => {
      result.current[1]('new-value');
    });

    expect(result.current[0]).toBe('new-value');
    expect(localStorage.getItem(key)).toBe(JSON.stringify('new-value'));
  });

  it('should handle non-JSON parseable values gracefully', () => {
    localStorage.setItem(key, 'not-json');
    const { result } = renderHook(() => useLocalStorage(key, 'default'));
    expect(result.current[0]).toBe('default');
  });
});
