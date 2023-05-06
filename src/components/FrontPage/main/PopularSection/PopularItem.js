import styles from "./PopularItem.module.css";

//temp

const PopularItem = (props) => {
  return (
    <div
      className={styles.wrapper}
      value={props.item.categories[0].id}
      onClick={props.load}
    >
      <img
        src={props.item.images[0].src}
        className={styles.image}
        value={props.item.categories[0].id}
      />
      <div value={props.item.categories[0].id}>
        <div className={styles.title} value={props.item.categories[0].id}>
          {props.item.name}
        </div>
        <div className={styles.description} value={props.item.categories[0].id}>
          {props.item.description.substring(0, 32)}...
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
