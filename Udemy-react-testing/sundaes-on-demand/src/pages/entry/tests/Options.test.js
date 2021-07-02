import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Options from '../Options';


test('displays images for each scoop from the server', async () => {
  render(<Options optionType="scoops" />);
  //find images
  // Since there are multiple images, I use getAllByRole()
  // Name option is the alt text
  const scoopImages = await screen.findAllByRole('img', {name: /scoop$/i});
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images, map array of elements to arr of alt text
  // Arrays and objects use toEqual() matcher
  const altTextArray = scoopImages.map((element) => element.alt);
  expect(altTextArray).toEqual(['Chocolate scoop', "Vanilla scoop"]);
})