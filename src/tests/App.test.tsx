import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const appDiv = screen.getByTestId('app');
  expect(appDiv).toBeInTheDocument();
  expect(appDiv).toHaveClass('App');
});
