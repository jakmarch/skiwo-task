import { useField } from "formik";
import { IInputProps, Input } from "./Input";

interface IInputFormControlProps extends IInputProps {
  label?: string;
  name: string;
}

export const InputFormControl = ({ ...props }: IInputFormControlProps) => {
  const [field] = useField({ name: props.name });
  return <Input {...props} {...field} />;
};
