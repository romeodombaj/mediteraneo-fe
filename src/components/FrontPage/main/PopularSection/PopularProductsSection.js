import styles from "./PopularProductsSection.module.css";
import PopularItem from "./PopularItem";
import { useEffect, useState } from "react";

//temp

import tempImg from "../../../../assets/towels.jpg";

const PopularProductsSection = (props) => {
  const [popularProductsList, setPopularProductsList] = useState([]);

  useEffect(() => {
    fetch(
      "https://mediteraneo.eu/wp-json/wc/v3/products?tag=205&per_page=5&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4"
    )
      .then((response) => response.json())
      .then((products) => setPopularProductsList(products));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles[`items-wrapper`]}>
        {popularProductsList &&
          popularProductsList.map((item) => {
            return <PopularItem load={props.load} key={item.id} item={item} />;
          })}
      </div>
      <img className={styles.image} src={tempImg} />
      <div className={styles[`title-wrapper`]}>
        <div className={styles.title}>POPULAR</div>
      </div>
    </div>
  );
};

export default PopularProductsSection;
