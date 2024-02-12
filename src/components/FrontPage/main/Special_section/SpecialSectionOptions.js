import styles from "./SpecialSectionOptions.module.css";

const SpecialSectionOptions = ({
  options,
  selectionIndex,
  setSelectionIndex,
}) => {
  return (
    <div className={styles.wrapper}>
      {options &&
        options.map((option, i) => {
          return (
            <div
              key={i}
              className={`${styles.option} ${
                styles[selectionIndex === i && "option-selected"]
              }`}
              onClick={() => setSelectionIndex(i)}
            >
              {option.name}
            </div>
          );
        })}
    </div>
  );
};

export default SpecialSectionOptions;
