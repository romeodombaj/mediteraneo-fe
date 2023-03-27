import React, { Fragment } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

const dummy_categories = [
  {
    id: 0,
    name: "Ručnici",
  },
  {
    id: 1,
    name: "Posteljina",
  },
  {
    id: 2,
    name: "Kuhinja",
  },
];

const Navigation = (props) => {
  const categorySelectionHandler = (event) => {
    props.onClose();
  };

  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div>
          <div onClick={props.onClose} className={styles.backdrop}></div>
          <div className={styles.wrapper}>
            {dummy_categories.map((category) => {
              return (
                <Link
                  to={`/${category.id}`}
                  onClick={categorySelectionHandler}
                  className={styles[`category-element`]}
                  key={category.id}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default Navigation;
