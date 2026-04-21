import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the primary application shell', async () => {
  render(<App />);

  expect(await screen.findByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
});
