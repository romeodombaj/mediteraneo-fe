import styles from "./NavBar.module.css";
import menuIcon from "../../assets/menu.png";
import cartIcon from "../../assets/cart.png";
import { Fragment, useState, useContext } from "react";
import Navigation from "./Navigation";
import Cart from "../Cart/Cart";
import CartContext from "../store/cart-context";

const NavBar = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const CartCtx = useContext(CartContext);

  const openNavigationHandler = () => {
    setIsNavigating(true);
  };

  const closeNavigationHandler = () => {
    setIsNavigating(false);
  };

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <Fragment>
      {isNavigating && <Navigation onClose={closeNavigationHandler} />}
      {cartIsOpen && <Cart onClose={closeCartHandler}></Cart>}
      <div className={styles.navbarWrapper}>
        <img
          onClick={openCartHandler}
          className={styles.navItem}
          src={cartIcon}
        ></img>
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
