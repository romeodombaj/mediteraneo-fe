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
import SubcategoryNavigation from "./SubcategoryNavigation";

const NavBar = (props) => {
  const [navigationTransparency, setNavigationTransparency] = useState(false);
  const navCtx = useContext(NavigationContext);

  const changeNavigationStateHandler = () => {
    navCtx.changeNavigationState();
  };

  const goHome = () => {
    navCtx.loadCategory();
  };

  useEffect(() => {
    props.nav(navCtx.isNavigating);
  }, [navCtx.isNavigating]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      if (window.scrollY === 0) {
        setNavigationTransparency(true);
      }

      window.onscroll = () => {
        if (window.scrollY === 0) {
          setNavigationTransparency(true);
        } else {
          setNavigationTransparency(false);
        }
      };
    } else {
      setNavigationTransparency(false);
    }
  });

  return (
    <Fragment>
      {navCtx.isNavigating && (
        <Navigation onClose={changeNavigationStateHandler} />
      )}
      {navCtx.cartOpen && <Cart onClose={navCtx.closeCart}></Cart>}
      <div
        className={`${styles.wrapper} ${
          styles[navigationTransparency && !navCtx.cartOpen && `transparent`]
        }`}
      >
        <div className={styles.container}>
          <div className={styles[`left-section`]}>
            <img
              className={`${styles[`nav-logo`]} ${styles[`nav-item`]} ${
                styles[
                  !(navigationTransparency && !navCtx.cartOpen) &&
                    `nav-img-item`
                ]
              }`}
              onClick={goHome}
              src={navLogo}
            />
            <div
              className={`${styles[`nav-item`]} ${styles.language} ${
                styles[
                  !(navigationTransparency && !navCtx.cartOpen) &&
                    `nav-img-item`
                ]
              }`}
            >
              ENG
            </div>
            <img
              className={`${styles[`nav-item`]} ${styles.search} ${
                styles[
                  !(navigationTransparency && !navCtx.cartOpen) &&
                    `nav-img-item`
                ]
              }`}
              src={searcIcon}
            ></img>
          </div>

          <div className={styles[`action-wrapper`]}>
            <img
              onClick={navCtx.changeCartState}
              className={`${styles[`nav-item`]} ${
                styles[
                  !(navigationTransparency && !navCtx.cartOpen) &&
                    `nav-img-item`
                ]
              }`}
              src={cartIcon}
            />
            <div
              onClick={changeNavigationStateHandler}
              className={`${styles.menu} ${styles[`nav-item`]} ${
                styles[
                  !(navigationTransparency && !navCtx.cartOpen) &&
                    `nav-img-item`
                ]
              }`}
            >
              <img src={menuIcon} className={` ${styles[`menu-icon`]} `}></img>
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
