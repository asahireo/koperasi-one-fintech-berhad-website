import { readFileSync } from 'node:fs';

test('global stylesheet defines aetherflow surface tokens', () => {
  const css = readFileSync('index.css', 'utf8');

  expect(css).toContain('--surface-glass');
  expect(css).toContain('--accent-violet');
});
