import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { IAddressAutocompleteFormControlProps } from "./components/AddressAutocomplete/AddressAutocompleteFormControl";

jest.mock(
  "./components/AddressAutocomplete/AddressAutocompleteFormControl",
  () => ({
    AddressAutocompleteFormControl: (
      props: IAddressAutocompleteFormControlProps
    ) => {
      return (
        <input
          name={props.name}
          placeholder={props.placeholder}
          onChange={(e) => {
            props.setValue(e.target.value);
          }}
          value={props.value}
        />
      );
    },
  })
);

test("Renders the app", () => {
  render(<App />);

  const textElement = screen.getByText(
    /Search for an address to add it to your list/i
  );
  expect(textElement).toBeInTheDocument();
});

test("Renders errors while empty submit", async () => {
  render(<App />);

  const submitButton = screen.getByText(/Add address/i);

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText(/The address is required!/i)).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(
      screen.getByText(/You have to provide at least one department!/i)
    ).toBeInTheDocument();
  });
});

test("Submits the form successfully", async () => {
  render(<App />);

  const autocompleteInput = screen.getByPlaceholderText(
    /Type your address here.../i
  );
  expect(autocompleteInput).toBeInTheDocument();
  fireEvent.change(autocompleteInput, { target: { value: "torun" } });

  const departmentsSelect = screen.getByText(/Select/i);
  fireEvent.keyDown(departmentsSelect, { keyCode: 40 });
  fireEvent.click(screen.getByText(/Department 1/i));

  const submitButton = screen.getByText(/Add address/i);

  fireEvent.click(submitButton);

  await screen.findByText(/Nr of departments: 1/i);
  await screen.findByText(/Directions:/i);
});
