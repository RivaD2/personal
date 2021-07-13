import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ScoopOption from "../ScoopOption";

test.only('indicate if scoop count is non-int or out of range' , async () => {
  // Needed mock function because ScoopOption will run updateItemCount whenever the input is changed
  // I have to have the prop exisiting
  render(<ScoopOption name="" imagePath="" updateItemCount={jest.fn()} />);

  //Expect input to be invalid with negative number
  const vanillaInput = screen.getByRole('spinbutton');
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '-1');
  // Based off info from React Boostrap, the class would be 'is-invalid'
  expect(vanillaInput).toHaveClass('is-invalid');

  // Replace with decimal input
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '2.5');
  expect(vanillaInput).toHaveClass('is-invalid');

  // Replace with input that's too high
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '11');
  expect(vanillaInput).toHaveClass('is-invalid');

  // Replace with valid input
  // This is testing validation rules, that the input can display as valid
  // I am not testing react bootstraps response
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '3');
  expect(vanillaInput).not.toHaveClass('is-invalid');
});