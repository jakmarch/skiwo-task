import { useField } from "formik";
import { Select, SelectOption } from "./Select";
import { MultiValue } from "react-select";

interface ISelectFormControlProps {
  name: string;
  label?: string;
  options: SelectOption[];
}

export const SelectFormControl = ({ ...props }: ISelectFormControlProps) => {
  const [field, , helpers] = useField(props.name);

  const onChange = (value: MultiValue<SelectOption>) => {
    helpers.setValue(value);
  };

  return <Select {...props} {...field} onChange={onChange} />;
};