import styles from "./ImagePortfolioSection.module.css";

//images
import search from "../../../assets/navigation/search.png";
import { Fragment, useState } from "react";
import ImageShow from "../../UI/ImageShow";

const ImagePortfolioSection = (props) => {
  const [slideShow, setSlideShow] = useState(false);

  const openImageSlideShow = () => {
    setSlideShow(true);
  };

  const closeImageSlieShow = () => {
    setSlideShow(false);
  };

  return (
    <Fragment>
      {slideShow && (
        <ImageShow onClose={closeImageSlieShow} img={props.item.images} />
      )}
      <div className={styles.wrapper} onClick={openImageSlideShow}>
        {/*<img className={styles.image2} src={props.item.images[0].src} />*/}
        <div className={styles.grid}>
          <img className={`${styles.image}`} src={props.item.images[0].src} />
          <img
            className={`${styles.image} ${styles.row1}`}
            src={props.item.images[1].src}
          />
          <img
            className={`${styles.image} ${styles.row1}`}
            src={props.item.images[2].src}
          />
          <div className={styles[`image-wrapper`]}>
            <img className={`${styles.image}`} src={props.item.images[1].src} />
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
    </Fragment>
  );
};

export default ImagePortfolioSection;
