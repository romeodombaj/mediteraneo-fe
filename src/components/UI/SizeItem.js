import { Fragment, useEffect, useState } from "react";
import styles from "./SizeItem.module.css";
import QuantitySelector from "./QuantitySelector";

const SizeItem = (props) => {
  const size = props.size;
  const price = props.price;
  const index = props.index;

  const [quantity, setQuantity] = useState(0);

  const setVariation = (value) => {
    let tempVariations = [...props.itemVariations];
    tempVariations[index].quantity = value;
    console.log(tempVariations[index]);
    props.setItemVariations(tempVariations);
  };

  /*useEffect(() => {
    let tempVariations = [...props.itemVariations];
    tempVariations[index].quantity = quantity;
    props.setItemVariations(tempVariations);
  }, [quantity]);*/

  useEffect(() => {}, [props.itemVariations]);

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.size}>{size}</div>
          <QuantitySelector
            index={index}
            quantity={props.itemVariations}
            setQuantity={setVariation}
            //quantity={quantity}
            //setQuantity={setQuantity}
          />
        </div>
        <div className={styles.price}>{price} EUR</div>
      </div>
      <div className={styles.divider} />
    </Fragment>
  );
};

export default SizeItem;
