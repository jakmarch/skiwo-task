import { FieldProps, useField } from "formik";
import styles from "./Select.module.scss";

import ReactSelect, { MultiValue } from "react-select";

interface Option {
  value: string;
  label: string;
}

export interface ISelectProps extends FieldProps {
  label?: string;
  options: Option[];
}

export const Select = ({ label, options, ...props }: ISelectProps) => {
  const [field,, helpers] = useField(props.field.name);

  const onChange = (value: MultiValue<Option>) => {
    helpers.setValue(value);
  };

  return (
    <div className={styles.select__wrapper}>
      <label className={styles.select__label}>{label}</label>
      <ReactSelect
        name={field.name}
        options={options}
        isMulti
        className={styles["custom-react-select"]}
        classNamePrefix="select"
        onChange={(option) =>
          (onChange as (option: MultiValue<Option>) => void)(
            option as MultiValue<Option>
          )
        }
      />
    </div>
  );
};
