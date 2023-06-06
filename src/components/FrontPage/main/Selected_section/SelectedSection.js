import ShowItem from "../../../UI/ShowItem";
import styles from "./SelectedSection.module.css";
import { useEffect, useState } from "react";

const SelectedSection = (props) => {
  const [selectedProductsList, setSelectedProductsList] = useState([]);

  useEffect(() => {
    fetch(
      "https://mediteraneo.eu/wp-json/wc/v3/products?tag=205&per_page=8&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4"
    )
      .then((response) => response.json())
      .then((products) => setSelectedProductsList(products));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>IZDVOJENI PROIZVODI</div>
      <div className={styles.grid}>
        {selectedProductsList &&
          selectedProductsList.map((item) => {
            return <ShowItem load={props.load} key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default SelectedSection;
