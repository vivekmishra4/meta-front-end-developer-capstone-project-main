import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  // Check if the logo in the footer is rendered
  const logo = getByAltText('Logo');
  expect(logo).toBeInTheDocument();

   // Check if the navigation is present in the header
   const nav = getByRole('navigation');
   expect(nav).toBeInTheDocument();
});
