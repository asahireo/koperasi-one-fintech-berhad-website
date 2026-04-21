import { render, screen, within } from '@testing-library/react';
import App from '../App';

test('renders the primary application shell', async () => {
  window.location.hash = '#/';
  render(<App />);

  expect(await screen.findByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
});

test('renders the new primary navigation items', async () => {
  window.location.hash = '#/';
  render(<App />);

  const navigation = await screen.findByRole('navigation', { name: /primary navigation/i });

  expect(within(navigation).getByRole('link', { name: /^Platform$/i })).toBeInTheDocument();
  expect(within(navigation).getByRole('link', { name: /Produk|Products/i })).toBeInTheDocument();
  expect(within(navigation).getByRole('link', { name: /Syarikat|Company/i })).toBeInTheDocument();
});
