import { AddressAutocomplete } from "./AddressAutocomplete";

export interface IAddressAutocompleteFormControlProps {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  setValue: (val: string) => void;
}

export const AddressAutocompleteFormControl = ({
  label,
  placeholder,
  value,
  setValue,
}: IAddressAutocompleteFormControlProps) => {
  return (
    <AddressAutocomplete
      label={label}
      placeholder={placeholder}
      setValue={(val) => setValue(val)}
      value={value}
    />
  );
};
