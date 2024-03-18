import styles from "./ImagePortfolioSection.module.css";
import { Fragment, useState, useEffect } from "react";
import ImageShow from "../../UI/ImageShow";

//images
import search from "../../../assets/navigation/search.png";
import LoadingAnimation from "../../UI/LoadingAnimation";
import noImg from "../../../assets/questionmarks.png";

const ImagePortfolioSection = (props) => {
  const item = props.item;
  const selectedColorIndex = props.selectedColorIndex;
  const lastImage = item.images[item.images.length - 1].src;

  const [imageOneLoaded, setImageOneLoaded] = useState(false);
  const [imageTwoLoaded, setImageTwoLoaded] = useState(false);
  const [imageThreeLoaded, setImageThreeLoaded] = useState(false);
  const [imageFourLoaded, setImageFourLoaded] = useState(false);
  const [imageRefresh, setImageRefresh] = useState(false);

  const [slideShow, setSlideShow] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const noImgSet = [noImg, noImg, noImg, noImg];

  const imageRefreshHandler = () => {
    setImageRefresh(true);
    setImageOneLoaded(false);
    setImageTwoLoaded(false);
    setImageThreeLoaded(false);
    setImageFourLoaded(false);

    setTimeout(() => {
      setImageRefresh(false);
    }, [1]);
  };

  useEffect(() => {
    if (
      item &&
      item != undefined &&
      item.attributes[1] &&
      item.images.length > 0
    ) {
      imageRefreshHandler();
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

      for (let i = startIndex; i < endIndex; i++) {
        tempImageSet.push(item.images[i].src);
      }

      tempImageSet.push(lastImage);

      setCurrentImages([...tempImageSet]);
    } else {
      setCurrentImages([...noImgSet]);
    }
  }, [selectedColorIndex, item]);

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
            <div
              className={styles[`image-wrapper`]}
              style={
                imageOneLoaded &&
                imageTwoLoaded &&
                imageThreeLoaded &&
                imageFourLoaded
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: "#f2f2f2" }
              }
            >
              {!imageRefresh && (
                <img
                  onLoad={() => setImageOneLoaded(true)}
                  style={
                    imageOneLoaded &&
                    imageTwoLoaded &&
                    imageThreeLoaded &&
                    imageFourLoaded
                      ? {}
                      : { display: "none" }
                  }
                  className={`${styles.image}`}
                  src={(currentImages[0] && currentImages[0]) || noImg}
                />
              )}

              <div className={styles[`open-more`]}>
                <img src={search} className={styles.search}></img>
                <div>POGLEDAJTE SVE FOTOGRAFIJE</div>
              </div>
            </div>
            <div
              className={styles[`image-wrapper`]}
              style={
                imageOneLoaded &&
                imageTwoLoaded &&
                imageThreeLoaded &&
                imageFourLoaded
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: "#f2f2f2" }
              }
            >
              {!imageRefresh && (
                <img
                  className={`${styles.image}`}
                  onLoad={() => setImageTwoLoaded(true)}
                  style={
                    imageOneLoaded &&
                    imageTwoLoaded &&
                    imageThreeLoaded &&
                    imageFourLoaded
                      ? {}
                      : { display: "none" }
                  }
                  src={
                    (currentImages[1] && currentImages[1]) ||
                    (currentImages[0] && currentImages[0]) ||
                    noImg
                  }
                />
              )}

              <div className={styles[`open-more`]}>
                <img src={search} className={styles.search}></img>
                <div>POGLEDAJTE SVE FOTOGRAFIJE</div>
              </div>
            </div>
            <div
              className={styles[`image-wrapper`]}
              style={
                imageOneLoaded &&
                imageTwoLoaded &&
                imageThreeLoaded &&
                imageFourLoaded
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: "#f2f2f2" }
              }
            >
              {!imageRefresh && (
                <img
                  className={`${styles.image} ${styles.row1}`}
                  onLoad={() => setImageThreeLoaded(true)}
                  style={
                    imageOneLoaded &&
                    imageTwoLoaded &&
                    imageThreeLoaded &&
                    imageFourLoaded
                      ? {}
                      : { display: "none" }
                  }
                  src={
                    (currentImages[2] && currentImages[2]) ||
                    (currentImages[1] && currentImages[1]) ||
                    (currentImages[0] && currentImages[0]) ||
                    noImg
                  }
                />
              )}

              <div className={styles[`open-more`]}>
                <img src={search} className={styles.search}></img>
                <div>POGLEDAJTE SVE FOTOGRAFIJE</div>
              </div>
            </div>
            <div
              style={
                imageOneLoaded &&
                imageTwoLoaded &&
                imageThreeLoaded &&
                imageFourLoaded
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: "#f2f2f2" }
              }
            >
              <div className={`${styles.image} ${styles.row1}`}>
                {!imageRefresh && (
                  <img
                    onLoad={() => setImageFourLoaded(true)}
                    style={
                      imageOneLoaded &&
                      imageTwoLoaded &&
                      imageThreeLoaded &&
                      imageFourLoaded
                        ? {}
                        : { display: "none" }
                    }
                    className={`${styles.image}`}
                    src={
                      (currentImages[3] && currentImages[3]) ||
                      (currentImages[0] && currentImages[0]) ||
                      (currentImages[1] && currentImages[1]) ||
                      noImg
                    }
                  />
                )}

                <div className={styles[`open-more`]}>
                  <img src={search} className={styles.search}></img>
                  <div>POGLEDAJTE SVE FOTOGRAFIJE</div>
                </div>
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
