import styles from "./ImagePortfolioSection.module.css";
import { Fragment, useState, useEffect } from "react";
import ImageShow from "../../UI/ImageShow";

//images
import search from "../../../assets/navigation/search.png";
import LoadingAnimation from "../../UI/LoadingAnimation";

const ImagePortfolioSection = (props) => {
  const item = props.item;
  const selectedColorIndex = props.selectedColorIndex;

  const [slideShow, setSlideShow] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    console.log(selectedColorIndex);

    if (item && item != undefined) {
      let tempImageSet = [];

      let startIndex;
      let endIndex;

      if (selectedColorIndex === 0) {
        startIndex = 1;
        endIndex = parseInt(item.attributes[1].options[selectedColorIndex]);
      } else {
        startIndex = parseInt(
          item.attributes[1].options[selectedColorIndex - 1]
        );
        endIndex = parseInt(item.attributes[1].options[selectedColorIndex]);
      }

      for (let i = startIndex; i <= endIndex; i++) {
        tempImageSet.push(item.images[i]);
      }

      console.log("here");
      setCurrentImages([...tempImageSet]);
    }
  }, [selectedColorIndex, item]);

  useEffect(() => {
    console.log(currentImages[0]);
  }, [currentImages]);

  const openImageSlideShow = () => {
    setSlideShow(true);
  };

  const closeImageSlieShow = () => {
    setSlideShow(false);
  };

  return (
    <Fragment>
      {slideShow && (
        <ImageShow onClose={closeImageSlieShow} img={currentImages} />
      )}

      <div className={styles.wrapper} onClick={openImageSlideShow}>
        {currentImages && currentImages.length > 0 ? (
          <div className={styles.grid}>
            <img className={`${styles.image}`} src={currentImages[0].src} />
            <img
              className={`${styles.image} ${styles.row1}`}
              src={currentImages[1].src}
            />
            <img
              className={`${styles.image} ${styles.row1}`}
              src={currentImages[2].src}
            />
            <div className={styles[`image-wrapper`]}>
              <img
                className={`${styles.image}`}
                src={currentImages[3].src || currentImages[0].src}
              />
              <div className={styles[`open-more`]}>
                <img src={search} className={styles.search}></img>
                <div>POGLEDAJTE SVE FOTOGRAFIJE</div>
              </div>
            </div>
          </div>
        ) : (
          <LoadingAnimation />
        )}
      </div>
    </Fragment>
  );
};

export default ImagePortfolioSection;
