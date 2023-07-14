import { useState } from "react";
import styles from "./RadioButton.module.css";

const RadioButton = (props) => {
  const [isActive, setIsActive] = useState(props.active);

  return (
    <div className={`${styles.wrapper} ${styles[props.active && `active`]}`}>
      <div className={styles.color} style={{ backgroundColor: props.color }} />
    </div>
  );
};

export default RadioButton;
