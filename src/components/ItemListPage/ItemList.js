import { useState, Fragment, useEffect, useContext } from "react";
import styles from "./ItemList.module.css";
import { useParams } from "react-router-dom";
import CartContext from "../store/cart-context";
import ItemListHeader from "./Header/ItemListHeader";
import ItemListMain from "./Main/ItemListMain";
import CategoryContext from "../store/category-context";
import LoadingContext from "../store/loading-context";

// dummy_images
import rucniciImg from "../../assets/ruc0.jpeg";
import kuhinjaImg from "../../assets/ruc1.jpg";
import posteljinaImg from "../../assets/ruc2.jpg";

const dummy_categories = [
  {
    id: 0,
    title: "Ručnici",
    image: rucniciImg,
  },
  {
    id: 1,
    title: "Posteljina",
    image: posteljinaImg,
  },
  {
    id: 2,
    title: "Kuhinja",
    image: kuhinjaImg,
  },
];

const fetchLinks = [
  {
    id: 0,
    name: "Ručnici",
    codename: "rucnici",
    link: "https://mediteraneo.eu/wp-json/wc/v3/products?category=186&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4",
  },
  {
    id: 1,
    name: "Posteljina",
    codename: "posteljina",
    link: "https://mediteraneo.eu/wp-json/wc/v3/products?category=187&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4",
  },
  {
    id: 2,
    name: "Kuhinjski elementi",
    codename: "kuhinja",
    link: "https://mediteraneo.eu/wp-json/wc/v3/products?category=188&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4",
  },
];

const ItemList = () => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cartCtx = useContext(CartContext);
  const categoryCtx = useContext(CategoryContext);
  const loadCtx = useContext(LoadingContext);

  const params = useParams().categoryID;

  const currentCategory = categoryCtx.getCategory(parseInt(params));

  const amoutOfItemsInCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    loadCtx.setParams(params);
    loadCtx.onProductLoad();
    setItemList([]);

    if (categoryCtx.categories) {
      fetch(
        `https://mediteraneo.eu/wp-json/wc/v3/products?category=${params}&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`
      )
        .then((response) => response.json())
        .then((posts) => setItemList(posts))
        .then(() => {
          if (itemList) {
            loadCtx.onProductLoaded();
          }
        });
    }
  }, [params, cartCtx.items.length, categoryCtx.categories]);

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <ItemListHeader category={currentCategory} />
        <ItemListMain itemInfo={itemList} />
      </div>
    </Fragment>
  );
};

export default ItemList;
