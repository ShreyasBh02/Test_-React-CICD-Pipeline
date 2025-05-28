import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App' // Your main React component

test('renders the heading', () => {
  render(<App />)
  const heading = screen.getByText(/Vite \+ React/i)
  expect(heading).toBeInTheDocument()
});

test('Increments count on button click', () => {
  render(<App />)
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument()

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 1');
});