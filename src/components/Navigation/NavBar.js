import styles from "./NavBar.module.css";
import menuIcon from "../../assets/menu.png";
import cartIcon from "../../assets/cart.png";
import { Fragment, useState } from "react";
import Navigation from "./Navigation";

const NavBar = () => {
  const [isNavigating, setIsNavigating] = useState(false);

  const openNavigationHandler = () => {
    setIsNavigating(true);
  };

  const closeNavigationHandler = () => {
    setIsNavigating(false);
  };

  return (
    <Fragment>
      {isNavigating && <Navigation onClose={closeNavigationHandler} />}
      <div className={styles.navbarWrapper}>
        <img className={styles.navItem} src={cartIcon}></img>
        <img
          onClick={openNavigationHandler}
          className={styles.navItem}
          src={menuIcon}
        ></img>
      </div>
    </Fragment>
  );
};

export default NavBar;
