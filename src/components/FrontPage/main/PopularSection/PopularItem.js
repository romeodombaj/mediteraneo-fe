import styles from "./PopularItem.module.css";

//temp

const PopularItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.item.images[0].src} className={styles.image} />
      <div>
        <div className={styles.title}>{props.item.name}</div>
        <div className={styles.description}>
          {props.item.description.substring(0, 32)}...
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
