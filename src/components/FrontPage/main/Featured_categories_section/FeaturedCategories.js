import styles from "./FeaturedCategories.module.css";
import CategoryContext from "../../../store/category-context";
import { Fragment, useContext } from "react";

const FeaturedCategories = () => {
  const catCtx = useContext(CategoryContext);
  console.log(catCtx.categories);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {catCtx.categories && (
          <Fragment>
            <div className={styles.category}>
              <img
                className={styles.image}
                src={catCtx.categories[1].image.src}
              />
              <div className={styles.info}>
                <div className={styles.title}>{catCtx.categories[1].name}</div>
                <div className={styles.paragraph}>Pogledajte ponudu</div>
                <div className={styles.more}>SAZNAJTE VIŠE</div>
              </div>
            </div>
            <div className={styles.category}>
              <img
                className={styles.image}
                src={catCtx.categories[2].image.src}
              />
              <div className={styles.info}>
                <div className={styles.title}>{catCtx.categories[2].name}</div>
                <div className={styles.paragraph}>Pogledajte ponudu</div>
                <div className={styles.more}>SAZNAJTE VIŠE</div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default FeaturedCategories;
