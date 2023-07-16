import styles from "./CategoryShowcaseSection.module.css";
import { useEffect, useState } from "react";
import ShowItem from "../../../UI/ShowItem";
import LoadingAnimation from "../../../UI/LoadingAnimation";

const CategoryShowcaseSection = (props) => {
  const [selectedProductsList, setSelectedProductsList] = useState([]);

  useEffect(() => {
    fetch(
      `https://mediteraneo.eu/wp-json/wc/v3/products?per_page=4&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`
    )
      .then((response) => response.json())
      .then((products) => setSelectedProductsList(products));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.title}>Rasvjeta</div>
        <div className={styles.lookup}>POGLEDAJ SVE PROIZVODE</div>
      </div>

      {selectedProductsList.length === 0 ? (
        <LoadingAnimation />
      ) : (
        <div className={styles.grid}>
          {selectedProductsList &&
            selectedProductsList.map((item) => {
              return <ShowItem load={props.load} key={item.id} item={item} />;
            })}
        </div>
      )}
    </div>
  );
};

export default CategoryShowcaseSection;
