import { render, screen } from '@testing-library/react';
import App from '../App';

const renderAtHash = (hash: string) => {
  window.location.hash = hash;
  return render(<App />);
};

test('platform route renders ecosystem orchestration content', async () => {
  renderAtHash('#/platform');

  expect(await screen.findByRole('heading', { name: /One orchestration layer|Satu lapisan orkestrasi/i })).toBeInTheDocument();
});

test('products route renders product overview panels', async () => {
  renderAtHash('#/products');

  expect(await screen.findByRole('heading', { name: /ICMIS/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /KoSMART/i })).toBeInTheDocument();
});

test('company route renders trust and partnership narrative', async () => {
  renderAtHash('#/company');

  expect(await screen.findByRole('heading', { name: /Built to modernize cooperative finance|Dibina untuk memodenkan kewangan koperasi/i })).toBeInTheDocument();
});

test('resources route renders curated download cards', async () => {
  renderAtHash('#/resources');

  const headings = await screen.findAllByRole('heading', { name: /Company Profile/i });
  expect(headings.length).toBeGreaterThan(0);
});

test('contact route renders the premium inquiry form', async () => {
  renderAtHash('#/contact');

  expect(await screen.findByRole('button', { name: /Send Request|Hantar Permintaan/i })).toBeInTheDocument();
});

test('legacy product detail route remains reachable', async () => {
  renderAtHash('#/solutions/ilms');

  expect(await screen.findByText(/iLMS/i)).toBeInTheDocument();
});
