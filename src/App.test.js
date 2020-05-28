import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders React Hooks Calendar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Hooks Calendar/i);
  expect(linkElement).toBeInTheDocument();
});
