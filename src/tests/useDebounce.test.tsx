import { act,renderHook } from '@testing-library/react';
import { beforeEach,describe, expect, it, vi } from 'vitest';

import { useDebounce } from '../useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('test', 500));
    expect(result.current).toBe('test');
  });

  it('should update the debounced value after the delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    // Cambiar valor
    rerender({ value: 'updated', delay: 500 });
    // Aún no cambió
    expect(result.current).toBe('initial');

    // Simular paso del tiempo
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('updated');
  });

  it('should cancel the timeout if value changes before delay ends', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'a', delay: 500 },
      }
    );

    rerender({ value: 'b', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(300); // no alcanza el delay
    });

    rerender({ value: 'c', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(500); // ahora sí alcanza
    });

    expect(result.current).toBe('c');
  });
});
