import { Fragment } from "react";
import Item from "./Item";
import styles from "./ItemInfo.module.css";

const ItemInfo = (props) => {
    return <Fragment>
        <h1>{props.itemInfo.name}</h1>
        <p>{props.itemInfo.description}</p>
    </Fragment>
};

export default ItemInfo;
