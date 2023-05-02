import styles from "./HotProductsSection.module.css";
import HotItem from "./HotItem";
import { useEffect, useState } from "react";

const HotProductsSection = () => {
  const [hotProductList, setHotProductList] = useState([]);

  useEffect(() => {
    fetch(
      "https://mediteraneo.eu/wp-json/wc/v3/products?tag=204&per_page=5&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4"
    )
      .then((response) => response.json())
      .then((products) => setHotProductList(products));
  }, []);

  return (
    <div className={styles.wrapper}>
      {hotProductList &&
        hotProductList.map((item) => {
          return <HotItem key={item.id} item={item} />;
        })}
    </div>
  );
};

export default HotProductsSection;
