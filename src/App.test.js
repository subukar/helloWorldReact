import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const titleElement = screen.getByText(/Welcome to my first react app/i);
  expect(titleElement).toBeInTheDocument();
});
