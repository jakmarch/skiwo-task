import classNames from "classnames";
import styles from "./Select.module.scss";

import ReactSelect, { MultiValue } from "react-select";

export interface SelectOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  name: string;
  placeholder?: string;
  value?: SelectOption[];
  label?: string;
  options: SelectOption[];
  onChange: (value: MultiValue<SelectOption>) => void;
  className?: string;
}

export const Select = ({
  name,
  placeholder,
  value,
  label,
  options,
  onChange,
  className,
}: ISelectProps) => {
  return (
    <div className={classNames(styles.select__wrapper, className)}>
      <label className={styles.select__label}>{label}</label>
      <ReactSelect
        name={name}
        placeholder={placeholder}
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
