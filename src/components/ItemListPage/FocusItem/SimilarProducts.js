import { useContext, useEffect, useState } from "react";
import ShowItem from "../../UI/ShowItem";
import styles from "./SimilarProducts.module.css";
import LoadingAnimation from "../../UI/LoadingAnimation";
import CategoryContext from "../../store/category-context";
import useGetItems from "../../hooks/use-get-items";

const SimilarProducts = (props) => {
  const catCtx = useContext(CategoryContext);
  let currentCategory = props.currentCategory;
  let categoryId = catCtx.getCategory(currentCategory);

  const [similarItems, setSimilarItems, getSimilarItems] = useGetItems();

  useEffect(() => {
    if (categoryId) {
      getSimilarItems(
        `?consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4&attribute_term=1&per_page=4&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&category=${categoryId.id}`
      );
    }
  }, [catCtx.categories]);

  /*useEffect(() => {
    console.log(similarItems);
    console.log(similarItems.length);
  }, [similarItems]);*/

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>POVEZANI PROIZVODI</div>
      {!similarItems || similarItems.length === 0 ? (
        <LoadingAnimation />
      ) : (
        <div className={styles.list}>
          {similarItems.map((item) => {
            return (
              <ShowItem
                key={item.id}
                item={item}
                currentCategory={currentCategory}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
