import { FC } from "react";
import { AddressAutocomplete } from "./AddressAutocomplete";

export interface IAddressAutocompleteFormControlProps {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  setValue: (val: string) => void;
}

export const AddressAutocompleteFormControl: FC<
  IAddressAutocompleteFormControlProps
> = ({ label, placeholder, value, setValue }) => {
  return (
    <AddressAutocomplete
      label={label}
      placeholder={placeholder}
      setValue={(val) => setValue(val)}
      value={value}
    />
  );
};
