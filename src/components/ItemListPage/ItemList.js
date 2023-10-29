import { useState, Fragment, useEffect, useContext } from "react";
import styles from "./ItemList.module.css";
import { Link, Outlet, useParams } from "react-router-dom";
import CartContext from "../store/cart-context";
import ItemListHeader from "./Header/ItemListHeader";
import ItemListMain from "./Main/ItemListMain";
import CategoryContext from "../store/category-context";
import LoadingContext from "../store/loading-context";
import ListActions from "./Main/ListActions";
import NavigationContext from "../store/navigation-context";
import SavedContext from "../store/saved-context";
import useGetItems from "../hooks/use-get-items";

const ItemList = () => {
  const [sortingValue, setSortingValue] = useState("0");
  const [gridStyleValue, setGridStyleValue] = useState("0");

  const cartCtx = useContext(CartContext);
  const categoryCtx = useContext(CategoryContext);
  const loadCtx = useContext(LoadingContext);

  const params = useParams().categorySlug;
  const [itemList, setItemList, getItemList] = useGetItems();
  const [filteredItemList, setFilteredItemList] = useState([]);

  const currentCategory = categoryCtx.getCategory(params);

  const changeGridStyleValue = (val) => {
    setGridStyleValue(val);
  };

  const changeSortingValue = (val) => {
    setSortingValue(val);
  };

  const filterItems = (filter) => {
    if (itemList.length > 0) {
      let tempArray = [];
      let counter = 0;

      itemList.map((item) => {
        if (item.price < 50) {
          tempArray.push(item);
          counter++;
        }
      });

      setItemList(tempArray);
    }
  };

  useEffect(() => {
    /*loadCtx.setParams(params);
    loadCtx.onProductLoad();*/

    setItemList([]);
    getItemList(
      `?per_page=100&category=${currentCategory.id}&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`
    );
  }, [params, cartCtx.items.length, categoryCtx.categories]);

  useEffect(() => {
    let temp;
    if (sortingValue === "0") {
      temp = [...itemList].sort((a, b) => a.price - b.price);
      setItemList(temp);
    } else if (sortingValue === "1") {
      temp = [...itemList].sort((a, b) => b.price - a.price);
      setItemList(temp);
    } else {
      temp = [...itemList].sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    setItemList(temp);
  }, [sortingValue]);

  //

  return (
    <Fragment>
      <Outlet />
      <div className={styles.wrapper}>
        {categoryCtx.categories && (
          <Fragment>
            <ItemListHeader category={currentCategory} params={params} />
            <div className={styles.count}>{itemList.length} proizvoda </div>
            <ListActions
              itemList={itemList}
              setFilteredItemList={setFilteredItemList}
              filterItems={filterItems}
              val={changeSortingValue}
              sty={changeGridStyleValue}
            />
            <ItemListMain
              gridStyle={gridStyleValue}
              itemInfo={filteredItemList}
              currentCategory={loadCtx.params}
              categories={categoryCtx.categories}
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default ItemList;
