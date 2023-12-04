import Cart from "../Cart";
import styles from "./CreateOrder.module.css";

const CreateOrder = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`action-button`]}>KRENI NA PLAĆANJE</div>
    </div>
  );
};

export default CreateOrder;
