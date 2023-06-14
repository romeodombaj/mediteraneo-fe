import styles from "./ImagePortfolioSection.module.css";

//images
import search from "../../../assets/navigation/search.png";

const ImagePortfolioSection = (props) => {
  return (
    <div className={styles.wrapper}>
      {/*<img className={styles.image2} src={props.item.images[0].src} />*/}
      <div className={styles.grid}>
        <img className={`${styles.image}`} src={props.item.images[0].src} />
        <img className={`${styles.image}`} src={props.item.images[0].src} />
        <img className={`${styles.image}`} src={props.item.images[0].src} />
        <div className={styles[`image-wrapper`]}>
          <img className={`${styles.image}`} src={props.item.images[0].src} />
          <div className={styles[`open-more`]}>
            <img src={search} className={styles.search}></img>
            <div>POGLEDAJTE SVE FOTOGRAFIJE</div>
          </div>
        </div>
      </div>

      {/*props.item.images.map((image, i) => {
        return (
          <img
            key={i}
            className={`${styles.image} ${styles[`item${i}`]}`}
            src={image.src}
          />
        );
      })*/}
    </div>
  );
};

export default ImagePortfolioSection;
