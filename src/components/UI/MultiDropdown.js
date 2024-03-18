import styles from "./MultiDropdown.module.css";
import arrowDown from "../../assets/Arrow-down.svg";

const MultiDropdown = (props) => {
  const value = props.value;

  const onValueChangeHandler = (e) => {
    let tempArray = [...value];
    if (e.target.checked) {
      tempArray.push(e.target.getAttribute("value"));
    } else {
      tempArray = tempArray.filter(
        (val) => val !== e.target.getAttribute("value")
      );
    }

    props.setValue(tempArray);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles[`info-wrapper`]}>
        <div>{props.title}</div>
        <img src={arrowDown} className={styles.arrow} />
      </div>

      <div className={styles[`options-wrapper`]}>
        {props.options &&
          props.options.length > 0 &&
          props.options.map((option, i) => {
            return (
              <label key={i} className={styles.option}>
                <input
                  type="checkbox"
                  onClick={onValueChangeHandler}
                  value={option}
                />
                {option}
              </label>
            );
          })}
      </div>
    </div>
  );
};

export default MultiDropdown;
