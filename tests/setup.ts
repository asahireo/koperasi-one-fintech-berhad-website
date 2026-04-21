import '@testing-library/jest-dom/vitest';

Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true,
});

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds = [0];

  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  unobserve() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  value: MockIntersectionObserver,
  writable: true,
});
