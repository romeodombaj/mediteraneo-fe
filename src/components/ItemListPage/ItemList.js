import { useState, Fragment, useEffect, useCallback } from "react";
import styles from "./ItemList.module.css";
import ShowItem from "./ShowItem";
import ItemDummyImage from "../../assets/ruc2.jpg";
import NavBar from "../Navigation/NavBar";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { useParams } from "react-router-dom";

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
  const [navIsActive, setNavIsActive] = useState(false);
  const [itemList, setItemList] = useState([]);

  const params = useParams().categoryID;

  useEffect(() => {
    fetch(fetchLinks[params].link)
      .then((response) => response.json())
      .then((posts) => setItemList(posts));
  }, [useParams().categoryID]);

  return (
    <Fragment>
      {navIsActive && <Navigation></Navigation>}
      <Link to="/">
        <img className={styles.logo} src={logoImg}></img>
      </Link>
      <NavBar></NavBar>
      {itemList.map((item) => {
        return <ShowItem key={item.id} itemInfo={item}></ShowItem>;
      })}
    </Fragment>
  );
};

export default ItemList;
