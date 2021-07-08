import {render, screen} from '../../../test-utils/testing-library.utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';
import OrderEntry from '../OrderEntry';

test('Update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />);

  // Make sure total starts out as $0.00
  const scoopSubtotal = screen.getByText('Scoops total: $', {exact: false});
  expect(scoopSubtotal).toHaveTextContent('0.00');
  //Update vanilla scoops to 1 and check subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {name:'Vanilla'});
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopSubtotal).toHaveTextContent('2.00');

  // Update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {name: 'Chocolate'});
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopSubtotal).toHaveTextContent('6.00');
});

test('Update toppings subtotal when toppings change', async () => {
  render(<Options optionType="toppings" />)

  const toppingsTotal = screen.getByText('Toppings total: $', {exact:false});
  expect(toppingsTotal).toHaveTextContent('0.00');

  const cherriesCheckbox = await screen.findByRole('checkbox', {name: 'Cherries'});
  userEvent.click(cherriesCheckbox);
  expect(toppingsTotal).toHaveTextContent('1.50');

  // Add another topping and check subtotal
  const oreosCheckbox = await screen.findByRole('checkbox', {name: 'Oreos'});
  userEvent.click(oreosCheckbox);
  expect(toppingsTotal).toHaveTextContent('3.00');
  // Remove additional topping
  userEvent.click(oreosCheckbox);
  expect(toppingsTotal).toHaveTextContent('1.50');
});

describe('grand total', () => {
  test('grand total updates properly if scoop is added first', async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole('heading', {name: /grand total: \$/i});
    // Check that grand total starts out at 0
    expect(grandTotal).toHaveTextContent('0.00');
    const vanillaInput = await screen.findByRole('spinbutton', {name: 'Vanilla'});

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '2');
    expect(grandTotal).toHaveTextContent('4.00');

    const cherriesCheckbox = await screen.findByRole('checkbox', {name: 'Cherries'});
    userEvent.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent('5.50');
  });

  test('grand total updates properly if topping is added first', async () => {
    render(<OrderEntry />);
    const cherriesCheckbox = await screen.findByRole('checkbox', {name: 'Cherries'});
    userEvent.click(cherriesCheckbox);

    const grandTotal = screen.getByRole('heading', {name: /grand total: \$/i});
    expect(grandTotal).toHaveTextContent('1.50');

    const vanillaInput = await screen.findByRole('spinbutton', {name: 'Vanilla'});
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '2');
    expect(grandTotal).toHaveTextContent('5.50');
  });

  test('grand total updates properly if item is removed', async () => {
    render(<OrderEntry />);
    const cherriesCheckbox = await screen.findByRole('checkbox', {name: 'Cherries'});
    userEvent.click(cherriesCheckbox);

    const vanillaInput = await screen.findByRole('spinbutton', {name: 'Vanilla'});
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '2');

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');

    const grandTotal = screen.getByRole('heading', {name: /grand total: \$/i});
    expect(grandTotal).toHaveTextContent('3.50');

    userEvent.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent('2.00');
  });
});