import styles from "./Select.module.scss";

import ReactSelect, { MultiValue } from "react-select";

export interface SelectOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  name: string;
  value?: SelectOption[];
  label?: string;
  options: SelectOption[];
  onChange: (value: MultiValue<SelectOption>) => void;
}

export const Select = ({
  name,
  value,
  label,
  options,
  onChange,
}: ISelectProps) => {
  return (
    <div className={styles.select__wrapper}>
      <label className={styles.select__label}>{label}</label>
      <ReactSelect
        name={name}
        value={value}
        options={options}
        isMulti
        className={styles["custom-react-select"]}
        classNamePrefix="select"
        onChange={onChange}
      />
    </div>
  );
};
