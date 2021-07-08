import {render, screen} from '../../../test-utils/testing-library.utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

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

})