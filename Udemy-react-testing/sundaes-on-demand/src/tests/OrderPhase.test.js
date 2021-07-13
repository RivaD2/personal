import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('order phases for happy path', async () => {
  // Don't need to wrap in provider as it is already wrapped!
  render(<App />);

  const vanillaInput = await screen.findByRole('spinbutton', {name: 'Vanilla'});
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');

  const chocolateInput = screen.getByRole('spinbutton', {name: 'Chocolate'});
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');

  const cherriesCheckbox = await screen.findByRole('checkbox', {name: 'Cherries'});
  userEvent.click(cherriesCheckbox);

  // Find and click order button on orderentry page
  const orderSummaryButton = screen.getByRole('button', {name: /order sundae/i});
  userEvent.click(orderSummaryButton);

  // Check summary info based on order
  const summaryHeading = screen.getByRole('heading', {name: 'Order Summary'});
  expect(summaryHeading).toBeInTheDocument();

  const toppingsHeading = screen.getByRole('heading', {name: 'Toppings: $1.50'});
  expect(toppingsHeading).toBeInTheDocument();

  //Check summary option items
  // Could have used screen.getAllByRole() for the list items
  // I could then use a Map to check text on list items 
  expect(screen.getByText('1 Vanilla')).toBeInTheDocument();
  expect(screen.getByText('2 Chocolate')).toBeInTheDocument();
  expect(screen.getByText('Cherries')).toBeInTheDocument();

  // Accept terms and conditions and click button to confirm order
  const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i});
  userEvent.click(checkbox);

  const confirmOrderButton = screen.getByRole('button', {name: /confirm order/i});
  userEvent.click(confirmOrderButton);

  // Expect "loading" to show
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  // Confirm that I have order number on confirmation page
  // This is async because there is a POST request to server 
  const thankYouHeader = await screen.findByRole('heading', {name: /thank you/i});
  expect(thankYouHeader).toBeInTheDocument();

  // Expect that loading has disappeared
  const notLoading = screen.queryByText('loading');
  expect(notLoading).not.toBeInTheDocument();

  const orderNumber = await screen.findByText(/order number/i);
  expect(orderNumber).toBeInTheDocument();

  // Click new order button on confirmation page
  const newOrderButton = screen.getByRole('button', {name: /new order/i});
  userEvent.click(newOrderButton);

  // Check that scoops and subtotals properties have been reset
  const scoopsTotal = screen.getByText('Scoops total: $0.00');
  expect(scoopsTotal).toBeInTheDocument();
  const toppingsTotal = screen.getByText('Scoops total: $0.00');
  expect(toppingsTotal).toBeInTheDocument();

  // Wait for items to appear to make sure both of axios calls 
  //for scoops and toppings have returned before test exits
  await screen.findByRole('spinbutton', {name: 'Vanilla'});
  await screen.findByRole('Checkbox', {name: 'Cherries'});
});

test('Toppings header is not on summary page if no toppings ordered', async () => {
  render(<App />);

  // Add scoops and toppings
  const vanillaInput = await screen.findByRole('spinbutton', {name: 'Vanilla'});
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');

  const chocolateInput = screen.getByRole('spinbutton', {name: 'Chocolate'});
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');

  // Find and click order summary button
  const orderSummaryButton = screen.getByRole('button', {name: /order sundae/i});
  userEvent.click(orderSummaryButton);

  const scoopsHeading = screen.getByRole('heading', {name: 'Scoops: $6.00'});
  expect(scoopsHeading).toBeInTheDocument();

  const toppingsHeading = screen.queryByRole('heading', {name: /toppings/i});
  expect(toppingsHeading).not.toBeInTheDocument();
}