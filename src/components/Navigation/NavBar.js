import styles from "./NavBar.module.css";
import { Fragment, useState, useContext, useEffect } from "react";
import Navigation from "./Navigation";
import Cart from "../Cart/Cart";
import NavigationContext from "../store/navigation-context";

//imgs
import menuIcon from "../../assets/navigation/menu-bars.png";
import cartIcon from "../../assets/navigation/cart.png";

const NavBar = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [menuIconState, setMenuIconState] = useState(``);

  const navCtx = useContext(NavigationContext);

  const changeNavigationStateHandler = () => {
    navCtx.changeNavigationState();
  };

  const goHome = () => {
    navCtx.loadCategory();
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
      <div className={styles.wrapper}>
        <div onClick={goHome} className={styles[`title-wrapper`]}>
          <div className={styles.title}>Mediteraneo</div>
        </div>

        <div className={styles[`action-wrapper`]}>
          <div onClick={openCartHandler} className={styles[`nav-item-wrapper`]}>
            <img className={styles.navItem} src={cartIcon} />
          </div>

          <div
            onClick={changeNavigationStateHandler}
            className={`${styles[`nav-item-wrapper`]}`}
          >
            <img
              className={`${styles.navItem} ${styles[menuIconState]}`}
              src={menuIcon}
            ></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
