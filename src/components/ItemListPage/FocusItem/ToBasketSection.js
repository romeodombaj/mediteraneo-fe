import styles from "./ToBasketSection.module.css";

const ToBasketSection = (props) => {
  return (
    <div className={styles[`wrapper`]}>
      <div className={styles[`quantity-wrapper`]}> 1 </div>
      <button onClick={props.addToCart} className={styles[`add-button`]}>
        ADD ITEM
      </button>
    </div>
  );
};

export default ToBasketSection;
