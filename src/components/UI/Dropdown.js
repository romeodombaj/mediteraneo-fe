import styles from "./Dropdown.module.css";

//temp
import arrowDown from "../../assets/Arrow-down.svg";
import { useState } from "react";

const Dropdown = (props) => {
  const [value, setValue] = useState(props.title);

  const onValueChangeHandler = (e) => {
    setValue(e.target.getAttribute("value"));
    props.valueChange();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles[`info-wrapper`]}>
        <div onChange={props.valueChange}>{value}</div>
        <img src={arrowDown} className={styles.arrow} />
      </div>

      <div className={styles[`options-wrapper`]}>
        {props.options.map((option, i) => {
          return (
            <div
              onClick={onValueChangeHandler}
              key={i}
              className={styles.option}
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
