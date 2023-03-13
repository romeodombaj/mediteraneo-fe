import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={styles.itemWrapper} onClick={props.onClose}>
      <h1>{props.itemInfo.name}</h1>
      <p>{props.itemInfo.description}</p>
      <img className={styles.itemImage} src={props.itemInfo.picture}></img>
    </div>
  );
};

export default Item;
