import { Fragment, useState } from "react";
import styles from "./RadioButton.module.css";

const RadioButton = (props) => {
  return (
    <Fragment>
      {props.color && (
        <div
          className={`${styles.wrapper} ${styles[props.active && `active`]}`}
          onClick={props.onClick}
          index={props.index}
          style={{ backgroundColor: props.color }}
        ></div>
      )}
    </Fragment>
  );
};

export default RadioButton;
