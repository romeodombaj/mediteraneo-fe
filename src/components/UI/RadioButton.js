import { useState } from "react";
import styles from "./RadioButton.module.css";

const RadioButton = (props) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[props.active && `active`]}`}
      onClick={props.onClick}
      index={props.index}
    >
      <div className={styles.color} style={{ backgroundColor: props.color }} />
    </div>
  );
};

export default RadioButton;
