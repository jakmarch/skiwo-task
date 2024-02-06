import classNames from "classnames";
import styles from "./Input.module.scss";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: React.ReactNode;
}

export const Input = ({ label, leftIcon, ...props }: IInputProps) => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.input__label}>{label}</label>

      <div className={styles.input__withIconWrapper}>
        <input
          className={classNames(
            styles.input,
            leftIcon && styles["input--withLeftIcon"]
          )}
          {...props}
        />
        {leftIcon && <div className={styles.input__leftIcon}>{leftIcon}</div>}
      </div>
    </div>
  );
};
