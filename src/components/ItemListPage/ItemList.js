import { useState, Fragment, useEffect, useContext } from "react";
import styles from "./ItemList.module.css";
import { Outlet, useParams } from "react-router-dom";
import CartContext from "../store/cart-context";
import ItemListHeader from "./Header/ItemListHeader";
import ItemListMain from "./Main/ItemListMain";
import CategoryContext from "../store/category-context";
import ListActions from "./Main/ListActions";
import useGetItems from "../hooks/use-get-items";

const ItemList = () => {
  const [sortingValue, setSortingValue] = useState("Price Up");
  const [gridStyleValue, setGridStyleValue] = useState("0");

  const cartCtx = useContext(CartContext);
  const categoryCtx = useContext(CategoryContext);

  const params = useParams().categorySlug;
  const [itemList, setItemList, getItemList] = useGetItems();
  const [filteredItemList, setFilteredItemList] = useState([]);

  const currentCategory = categoryCtx.getCategory(params);

  const changeGridStyleValue = (val) => {
    setGridStyleValue(val);
  };

  useEffect(() => {
    setItemList([]);
    getItemList(
      `?per_page=100&category=${currentCategory.id}&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`
    );
  }, [params, cartCtx.items.length, categoryCtx.categories]);

  useEffect(() => {
    let temp = [...itemList];
    setFilteredItemList([]);
    setTimeout(() => {
      if (sortingValue === "Price Up") {
        temp = temp.sort((a, b) => a.price - b.price);
      } else if (sortingValue === "Price Down") {
        temp = temp.sort((a, b) => b.price - a.price);
      } else {
        temp = temp.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      setItemList(temp);
    }, [1]);
  }, [sortingValue]);

  return (
    <Fragment>
      <Outlet />
      <div className={styles.wrapper}>
        {categoryCtx.categories && (
          <Fragment>
            <ItemListHeader category={currentCategory} params={params} />
            <div className={styles.count}>
              {filteredItemList.length} proizvoda
            </div>
            <ListActions
              itemList={itemList}
              setFilteredItemList={setFilteredItemList}
              sortingValue={sortingValue}
              setSortingValue={setSortingValue}
              sty={changeGridStyleValue}
            />
            <ItemListMain
              gridStyle={gridStyleValue}
              itemInfo={filteredItemList}
              itemListCount={itemList.length}
              currentCategory={params}
              categories={categoryCtx.categories}
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default ItemList;
