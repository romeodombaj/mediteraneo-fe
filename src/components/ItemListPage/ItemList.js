import { useState, Fragment, useEffect, useContext } from "react";
import styles from "./ItemList.module.css";
import ShowItem from "./ShowItem";
import { useParams } from "react-router-dom";
import CartContext from "../store/cart-context";
import ItemListHeader from "./ItemListHeader";

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

const ItemList = (props) => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cartCtx = useContext(CartContext);
  const params = useParams().categoryID;

  const amoutOfItemsInCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    setIsLoading(true);
    fetch(fetchLinks[params].link)
      .then((response) => response.json())
      .then((posts) => setItemList(posts))
      .then(setIsLoading(false));
  }, [useParams().categoryID, cartCtx.items.length]);

  return (
    <Fragment>
      {isLoading && <h1>LOADIG</h1>}
      {!isLoading && (
        <Fragment>
          <ItemListHeader />
          <div className={styles[`main-wrapper`]}>
            <div className={styles[`item-grid`]}>
              {itemList.map((item) => {
                return <ShowItem key={item.id} itemInfo={item} />;
              })}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ItemList;
