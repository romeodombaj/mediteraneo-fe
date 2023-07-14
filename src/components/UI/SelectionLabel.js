import styles from "./SelectionLabel.module.css";

import arrow from "../../assets/Arrow-down.svg";

const SelectionLabel = (props) => {
  return (
    <div className={styles[`wrapper`]}>
      <div className={styles[`text`]}>{props.text}</div>
      <img src={arrow} className={styles[`arrow`]} />
    </div>
  );
};

export default SelectionLabel;
