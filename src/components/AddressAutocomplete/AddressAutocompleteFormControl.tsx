import { FC } from "react";
import { useField } from "formik";
import { AddressAutocomplete } from "./AddressAutocomplete";

interface IAddressAutocompleteFormControlProps {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
}

export const AddressAutocompleteFormControl: FC<
  IAddressAutocompleteFormControlProps
> = ({ name, label, placeholder, value }) => {
  const [, , helpers] = useField(name);
  console.log(value);

  return (
    <AddressAutocomplete
      label={label}
      placeholder={placeholder}
      setValue={(val) => helpers.setValue(val)}
      value={value}
    />
  );
};
