import styles from "./Input.module.css";

export default function Input({
  isTextArea = false,
  error = false,
  setError = (e) => {},
  onBlur = (e) => {},
  label = 0,
  setValue,
  value,
  type = "text",
  noBorder = false,
  autoFocus = false,
  onKeyDown = false,
  placeholder = "",
}) {
  return (
    <div className={styles.wrapper}>
      {label !== 0 && <label className={styles.label}>{label}</label>}
      {isTextArea ? (
        <textarea
          className={`${styles.textarea} ${
            styles[!noBorder && `textarea-border`]
          } ${styles[error && `error-field`]}`}
          onChange={(e) => {
            setError(false);
            setValue(e.currentTarget.value);
          }}
          value={value}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onBlur={onBlur}
        />
      ) : (
        <input
          className={`${styles.input} ${styles[!noBorder && `input-border`]}  ${
            styles[error && `error-field`]
          }`}
          placeholder={placeholder}
          value={value}
          autoFocus={autoFocus}
          onBlur={onBlur}
          type={type}
          onKeyDown={onKeyDown}
          onChange={(e) => {
            setError(false);
            setValue(e.currentTarget.value);
          }}
        />
      )}
    </div>
  );
}
