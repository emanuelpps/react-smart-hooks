import { act,renderHook } from '@testing-library/react';
import { describe, expect,it } from 'vitest';

import { useIsMounted } from '../useIsMounted';

describe('useIsMounted', () => {
  it('should be true after mount', () => {
    const { result } = renderHook(() => useIsMounted());
    expect(result.current.current).toBe(true);
  });

  it('should be false after unmount', () => {
    const { result, unmount } = renderHook(() => useIsMounted());
    expect(result.current.current).toBe(true);
    unmount();
    expect(result.current.current).toBe(false);
  });

  it('should not update after unmount', () => {
    const { result, unmount } = renderHook(() => useIsMounted());
    unmount();
    act(() => {
      result.current.current = true;
    });
    expect(result.current.current).toBe(true);
  });
});
