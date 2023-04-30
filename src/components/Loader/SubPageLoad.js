import { Fragment, useContext, useEffect, useState } from "react";
import styles from "./SubPageLoad.module.css";
import LoadingContext from "../store/loading-context";
import CategoryContext from "../store/category-context";

const SubPageLoad = () => {
  const [outAnimation, setOutAnimation] = useState(``);

  const loadCtx = useContext(LoadingContext);
  const categoryCtx = useContext(CategoryContext);
  const currentCategory = categoryCtx.getCategory(parseInt(loadCtx.params));

  useEffect(() => {
    if (loadCtx.productLoaded) {
      setOutAnimation(`out`);
    } else {
      setOutAnimation(``);
    }
  }, [loadCtx.productLoaded]);

  return (
    <div className={`${styles.wrapper} ${styles[outAnimation]}`}>
      {currentCategory && (
        <Fragment>
          <div className={styles.title}>{currentCategory.name}</div>
          <div className={styles[`image-wrapper`]}>
            <img className={styles.image} src={currentCategory.image.src}></img>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default SubPageLoad;
