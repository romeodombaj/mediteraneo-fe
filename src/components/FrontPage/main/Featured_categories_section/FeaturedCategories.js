import styles from "./FeaturedCategories.module.css";
import CategoryContext from "../../../store/category-context";
import NavigationContext from "../../../store/navigation-context";
import { Fragment, useContext } from "react";
import LoadingAnimation from "../../../UI/LoadingAnimation";

const FeaturedCategories = () => {
  const catCtx = useContext(CategoryContext);

  const navCtx = useContext(NavigationContext);

  const openCategory = (e) => {
    const selectedId = e.currentTarget.getAttribute("value");
    navCtx.loadCategory(selectedId);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {catCtx.categories && catCtx.categories.length > 0 ? (
          <Fragment>
            <div
              className={styles.category}
              onClick={openCategory}
              value={catCtx.categories[2].id}
            >
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
            <div
              className={styles.category}
              onClick={openCategory}
              value={catCtx.categories[2].id}
            >
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
        ) : (
          <LoadingAnimation />
        )}
      </div>
    </div>
  );
};

export default FeaturedCategories;
