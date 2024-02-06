import { FC } from "react";
import { useField } from "formik";
import { AddressAutocomplete } from "./AddressAutocomplete";

interface IAddressAutocompleteFormControlProps {
  name: string;
  label?: string;
  placeholder?: string;
}

export const AddressAutocompleteFormControl: FC<
  IAddressAutocompleteFormControlProps
> = ({ name, label, placeholder }) => {
  const [, , helpers] = useField(name);

  return (
    <AddressAutocomplete
      label={label}
      placeholder={placeholder}
      setValue={(val) => helpers.setValue(val)}
    />
  );
};
