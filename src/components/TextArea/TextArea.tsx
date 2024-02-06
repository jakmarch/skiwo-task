import styles from "./TextArea.module.scss";

interface ITextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = ({ label, ...props }: ITextAreaProps) => {
  return (
    <div className={styles.textarea__wrapper}>
      <label className={styles.textarea__label}>{label}</label>
      <textarea className={styles.textarea} {...props} />
    </div>
  );
};
