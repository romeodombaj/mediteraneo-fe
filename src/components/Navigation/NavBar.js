import styles from "./NavBar.module.css";
import menuIcon from "../../assets/menu.png";
import cartIcon from "../../assets/cart.png";
import { Fragment, useState, useContext, useEffect } from "react";
import Navigation from "./Navigation";
import Cart from "../Cart/Cart";
import CartContext from "../store/cart-context";

const NavBar = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [menuIconState, setMenuIconState] = useState(``);

  const CartCtx = useContext(CartContext);

  const changeNavigationStateHandler = () => {
    setIsNavigating((prevState) => !prevState);
  };

  const openNavigationHandler = () => {
    setIsNavigating(true);
  };

  const closeNavigationHandler = () => {
    setMenuIconState(``);
    setIsNavigating(false);
  };

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  useEffect(() => {
    isNavigating ? setMenuIconState(`menu-icon-open`) : setMenuIconState(``);
  }, [isNavigating]);

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
          onClick={changeNavigationStateHandler}
          className={`${styles.navItem} ${styles[menuIconState]}`}
          src={menuIcon}
        ></img>
      </div>
    </Fragment>
  );
};

export default NavBar;
