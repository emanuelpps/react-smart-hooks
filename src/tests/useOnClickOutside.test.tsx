import { render } from '@testing-library/react';
import { useRef } from 'react';
import { beforeEach,describe, expect, it, vi } from 'vitest';

import { useOnClickOutside } from '../useOnClickOutside';

function TestComponent({ handler }: { handler: () => void }) {
  const ref = useRef(null);
  useOnClickOutside(ref, handler);

  return (
    <div>
      <div ref={ref} data-testid="inside">Inside</div>
      <div data-testid="outside">Outside</div>
    </div>
  );
}

describe('useOnClickOutside', () => {
  let handler: () => void;

  beforeEach(() => {
    handler = vi.fn();
  });

  it('should NOT call handler when clicking inside the element', () => {
    const { getByTestId } = render(<TestComponent handler={handler} />);

    getByTestId('inside').dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(handler).not.toHaveBeenCalled();
  });

  it('should call handler when clicking outside the element', () => {
    const { getByTestId } = render(<TestComponent handler={handler} />);

    getByTestId('outside').dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('should clean up event listener on unmount', () => {
    const removeEventListener = vi.spyOn(document, 'removeEventListener');
    const { unmount } = render(<TestComponent handler={handler} />);

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
  });
});
