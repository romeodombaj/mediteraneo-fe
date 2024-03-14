import styles from "./SelectionLabel.module.css";

import arrow from "../../assets/Arrow-down.svg";

const SelectionLabel = (props) => {
  return (
    <div className={styles[`wrapper`]}>
      <div className={styles[`text`]}>
        <strong>{props.text}</strong>{" "}
        {props.hoverIndex && props.hoverIndex !== -1
          ? props.hoverIndex
          : (props.additionalText && props.additionalText) || ""}
      </div>
      <div className={styles[`additional-text`]}></div>
      <img src={arrow} className={styles[`arrow`]} />
    </div>
  );
};

export default SelectionLabel;
