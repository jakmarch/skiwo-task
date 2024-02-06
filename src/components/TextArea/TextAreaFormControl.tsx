import { useField } from "formik";
import { TextArea } from "./TextArea";

interface ITextAreaFormControlProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
}

export const TextAreaFormControl = ({
  ...props
}: ITextAreaFormControlProps) => {
  const [field] = useField({ name: props.name });
  return <TextArea {...props} {...field} />;
};
