import { useState, Fragment } from "react";
import styles from "./ItemList.module.css";
import ShowItem from "./ShowItem";
import ItemDummyImage from "../../assets/ruc2.jpg";
import NavBar from "../Navigation/NavBar";

const dummy_items = [
  {
    id: 0,
    name: "item1",
    description: "item1 is a gud item",
    picture: ItemDummyImage,
  },
  {
    id: 1,
    name: "item2",
    description: "item2 is a VERYgud item",
    picture: ItemDummyImage,
  },
  {
    id: 2,
    name: "item3",
    description: "item3 is a EXTRAgud item",
    picture: ItemDummyImage,
  },
];

const ItemList = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <h1> HELLO WRLD</h1>
      {dummy_items.map((item) => {
        return <ShowItem key={item.id} itemInfo={item}></ShowItem>;
      })}
    </Fragment>
  );
};

export default ItemList;
