import React from 'react';
import { render } from '@testing-library/react';
import Routes from './routes';

test('renders home text', () => {
  const { getByText } = render(<Routes />);
  const homeTitleElement = getByText(/Home/i);
  expect(homeTitleElement).toBeInTheDocument();
});
