import styles from "./ImagePortfolioSection.module.css";

const ImagePortfolioSection = (props) => {
  return (
    <div className={styles.wrapper}>
      {/*<img className={styles.image2} src={props.item.images[0].src} />*/}

      {props.item.images.map((image, i) => {
        return (
          <img
            className={`${styles.image} ${styles[`item${i}`]}`}
            src={image.src}
          />
        );
      })}
    </div>
  );
};

export default ImagePortfolioSection;
