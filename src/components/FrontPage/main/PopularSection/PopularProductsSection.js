import styles from "./PopularProductsSection.module.css";
import PopularItem from "./PopularItem";

//temp

import tempImg from "../../../../assets/towels.jpg";

const PopularProductsSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles[`items-wrapper`]}>
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
      </div>
      <img className={styles.image} src={tempImg} />
      <div className={styles[`title-wrapper`]}>
        <div className={styles.title}>POPULAR</div>
      </div>
    </div>
  );
};

export default PopularProductsSection;
