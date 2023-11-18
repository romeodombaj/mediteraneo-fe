import styles from "./Dropdown.module.css";
import arrowDown from "../../assets/Arrow-down.svg";

const Dropdown = (props) => {
  const value = props.value;

  const onValueChangeHandler = (e) => {
    props.setValue(e.target.getAttribute("value"));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles[`info-wrapper`]}>
        <div>{props.value}</div>
        <img src={arrowDown} className={styles.arrow} />
      </div>

      <div className={styles[`options-wrapper`]}>
        {props.options.map((option, i) => {
          return (
            <div
              onClick={onValueChangeHandler}
              key={i}
              className={`${styles.option} ${
                styles[option === value && "selected"]
              }`}
              value={option}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
