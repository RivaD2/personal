import { expect } from "@jest/globals";
import { render, screen } from "../../../test-utils/testing-library.utils";
import Options from '../Options';
import { OrderDetailsProvider } from '../../../context/OrderDetails';


test('displays images for each scoop from the server', async () => {
  render(<Options optionType="scoops" /> );
  //find images
  // Since there are multiple images, I use await findAllByRole() due to async work
  // Name option is the alt text
  const scoopImages = await screen.findAllByRole('img', {name: /scoop$/i});
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images, map array of elements to arr of alt text
  // Arrays and objects use toEqual() matcher
  const altTextArray = scoopImages.map(element => element.alt);
  expect(altTextArray).toEqual(['Chocolate scoop', "Vanilla scoop"]);
});

test('displays images for each topping from server', async () => {
  render(<Options optionType="toppings" />);
  const toppingImages = await screen.findAllByRole('img', {name: /topping$/i});
  expect(toppingImages).toHaveLength(3);

  const imageTitles = toppingImages.map(img => img.alt);
  expect(imageTitles).toEqual(['Cherries topping', 'Oreos topping', "Gummy Bears topping"]);
})