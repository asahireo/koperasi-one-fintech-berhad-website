import { render } from '@testing-library/react';
import { vi } from 'vitest';
import ParticleField from '../../components/ParticleField';

test('renders a canvas background', () => {
  const { container } = render(<ParticleField />);

  expect(container.querySelector('canvas')).not.toBeNull();
});

test('checks reduced motion preferences before animation setup', () => {
  const originalMatchMedia = window.matchMedia;
  const matchMedia = vi.fn().mockReturnValue({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  });

  Object.defineProperty(window, 'matchMedia', {
    value: matchMedia,
    configurable: true,
  });

  render(<ParticleField />);

  expect(matchMedia).toHaveBeenCalled();

  Object.defineProperty(window, 'matchMedia', {
    value: originalMatchMedia,
    configurable: true,
  });
});
