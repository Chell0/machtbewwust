import "@testing-library/jest-dom";
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Suppress the Sanity warning
jest.mock('@sanity/client', () => {
  const originalModule = jest.requireActual('@sanity/client');
  return {
    ...originalModule,
    createClient: jest.fn(() => ({
      fetch: jest.fn(),
    })),
  };
});
