import styles from "./Button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // label?: string;
}

export const Button = ({ ...props }: IButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};
