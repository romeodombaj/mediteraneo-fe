import styles from "./NavBar.module.css";
import { Fragment, useState, useContext, useEffect } from "react";
import Navigation from "./Navigation";
import Cart from "../Cart/Cart";
import NavigationContext from "../store/navigation-context";

//images
import menuIcon from "../../assets/navigation/menu-bars.png";
import cartIcon from "../../assets/navigation/cart.png";
import navLogo from "../../assets/navigation/nav-logo.png";
import searcIcon from "../../assets/navigation/search.png";

const NavBar = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [navigationTransparency, setNavigationTransparency] = useState(false);

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
    props.nav(navCtx.isNavigating);
  }, [navCtx.isNavigating]);

  useEffect(() => {
    if (window.pageYOffset === 0) {
      setNavigationTransparency(true);
    }

    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setNavigationTransparency(true);
      } else {
        setNavigationTransparency(false);
      }
    };
  });

  return (
    <Fragment>
      {navCtx.isNavigating && (
        <Navigation onClose={changeNavigationStateHandler} />
      )}
      {cartIsOpen && <Cart onClose={closeCartHandler}></Cart>}
      <div
        className={`${styles.wrapper} ${
          styles[navigationTransparency && `transparent`]
        }`}
      >
        <div className={styles.container}>
          <div className={styles[`left-section`]}>
            <img
              className={`${styles[`nav-logo`]} ${styles[`nav-item`]} ${
                styles[!navigationTransparency && `nav-img-item`]
              }`}
              onClick={goHome}
              src={navLogo}
            ></img>
            <div className={`${styles[`nav-item`]} ${styles.language}`}>
              ENG
            </div>
            <img
              className={`${styles[`nav-item`]} ${styles.search} ${
                styles[!navigationTransparency && `nav-img-item`]
              }`}
              src={searcIcon}
            ></img>
          </div>

          <div className={styles[`action-wrapper`]}>
            <img
              onClick={openCartHandler}
              className={`${styles[`nav-item`]} ${
                styles[!navigationTransparency && `nav-img-item`]
              }`}
              src={cartIcon}
            />
            <div
              onClick={changeNavigationStateHandler}
              className={`${styles.menu} ${styles[`nav-item`]}`}
            >
              <img
                src={menuIcon}
                className={` ${styles[`menu-icon`]} ${
                  styles[!navigationTransparency && `nav-img-item`]
                }`}
              ></img>
              <div className={styles[`menu-text`]}>MENU</div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
      </div>
    </Fragment>
  );
};

export default NavBar;
