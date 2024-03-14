import styles from "./CategoryShowcaseSection.module.css";
import { useContext, useEffect, useState } from "react";
import ShowItem from "../../../UI/ShowItem";
import LoadingAnimation from "../../../UI/LoadingAnimation";
import useGetItems from "../../../hooks/use-get-items";
import CategoryContext from "../../../store/category-context";
import NavigationContext from "../../../store/navigation-context";

const emptyArrayOfItems = [1, 2, 3, 4];

const CategoryShowcaseSection = (props) => {
  const [itemList, setItemList, getItemList] = useGetItems(
    "special_collections"
  );
  const catCtx = useContext(CategoryContext);
  const navCtx = useContext(NavigationContext);

  // loading ručnici default
  const categorySelectionHandler = (id = 253) => {
    navCtx.loadCategory(253);
  };

  useEffect(() => {
    getItemList(
      `?per_page=4&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`
    );
  }, [catCtx.categories]);

  return (
    <div className={styles.wrapper}>
      <div onClick={categorySelectionHandler}>
        <div className={styles.title}>Ogrtači</div>
        <div className={styles.lookup}>POGLEDAJ SVE PROIZVODE</div>
      </div>

      <div className={styles.grid}>
        {itemList && itemList.length === 0
          ? emptyArrayOfItems.map((item, i) => {
              return (
                <div key={i} className={`${styles[i > 3 && `hidden`]}`}>
                  <ShowItem />
                </div>
              );
            })
          : itemList.map((item, i) => {
              return (
                <div key={i} className={`${styles[i > 3 && `hidden`]}`}>
                  <ShowItem load={props.load} key={item.id} item={item} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default CategoryShowcaseSection;
