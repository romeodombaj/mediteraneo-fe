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
        <ImageShow onClose={closeImageSlieShow} img={props.images} />
      )}

      {props.images && props.images.length > 0 && (
        <div className={styles.wrapper} onClick={openImageSlideShow}>
          <div className={styles.grid}>
            <img className={`${styles.image}`} src={props.images[0].src} />
            <img
              className={`${styles.image} ${styles.row1}`}
              src={props.images[1].src}
            />
            <img
              className={`${styles.image} ${styles.row1}`}
              src={props.images[2].src}
            />
            <div className={styles[`image-wrapper`]}>
              <img className={`${styles.image}`} src={props.images[1].src} />
              <div className={styles[`open-more`]}>
                <img src={search} className={styles.search}></img>
                <div>POGLEDAJTE SVE FOTOGRAFIJE</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ImagePortfolioSection;
