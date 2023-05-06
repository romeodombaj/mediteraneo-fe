import styles from "./NavBar.module.css";
import menuIcon from "../../assets/menu.png";
import cartIcon from "../../assets/cart.png";
import { Fragment, useState, useContext, useEffect } from "react";
import Navigation from "./Navigation";
import Cart from "../Cart/Cart";
import NavigationContext from "../store/navigation-context";

const NavBar = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [menuIconState, setMenuIconState] = useState(``);

  const navCtx = useContext(NavigationContext);

  const changeNavigationStateHandler = () => {
    navCtx.changeNavigationState();
  };

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  useEffect(() => {
    navCtx.isNavigating
      ? setMenuIconState(`menu-icon-open`)
      : setMenuIconState(``);
    props.nav(navCtx.isNavigating);
  }, [navCtx.isNavigating]);

  return (
    <Fragment>
      {navCtx.isNavigating && (
        <Navigation onClose={changeNavigationStateHandler} />
      )}
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
