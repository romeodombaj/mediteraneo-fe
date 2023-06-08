import styles from "./Dropdown.module.css";

//temp
import arrowDown from "../../assets/Arrow-down.svg";

const Dropdown = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`info-wrapper`]}>
        <div>{props.title}</div>
        <img src={arrowDown} className={styles.arrow} />
      </div>

      <div className={styles[`options-wrapper`]}>
        {props.options.map((option, i) => {
          return (
            <div key={i} className={styles.option}>
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
