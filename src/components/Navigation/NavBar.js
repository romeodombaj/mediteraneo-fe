import styles from "./NavBar.module.css";
import { Fragment, useState, useContext, useEffect } from "react";
import Navigation from "./Navigation";
import Cart from "../Cart/Cart";
import NavigationContext from "../store/navigation-context";
import Saved from "../Saved/Saved";
//images
import menuIcon from "../../assets/navigation/menu-bars.png";
import cartIcon from "../../assets/navigation/cart.png";
import navLogo from "../../assets/logo-notxt.png";
import searcIcon from "../../assets/navigation/search.png";
import savedIcon from "../../assets/heart-filled.png";
import unsavedIcon from "../../assets/heart-empty.png";
import SavedContext from "../store/saved-context";
import CartContext from "../store/cart-context";
import Search from "./Search";

const title = ["M", "E", "D", "I", "T", "E", "R", "A", "N", "E", "O"];

const NavBar = (props) => {
  const [navigationTransparency, setNavigationTransparency] = useState(false);
  const navCtx = useContext(NavigationContext);
  const saveCtx = useContext(SavedContext);
  const cartCtx = useContext(CartContext);

  const changeNavigationStateHandler = () => {
    navCtx.changeNavigationState();
  };

  useEffect(() => {
    if (window.location.hash === "#/" || window.location.hash === "") {
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
      {navCtx.cartOpen && <Cart onClose={navCtx.closeCart} />}

      {navCtx.savedOpen && <Saved onClose={navCtx.closeSaved} />}
      <div
        className={`${styles.wrapper} ${
          styles[
            navigationTransparency &&
              !navCtx.cartOpen &&
              !navCtx.savedOpen &&
              `transparent`
          ]
        }`}
      >
        <div className={styles.container}>
          {
            // HOME BUTTON
          }

          <div className={styles[`left-section`]}>
            <img
              onClick={() => {
                navCtx.loadCategory();
              }}
              className={`${styles[`nav-logo`]} ${styles[`nav-item`]} ${
                styles[
                  navigationTransparency &&
                    !navCtx.cartOpen &&
                    !navCtx.savedOpen &&
                    `nav-img-item`
                ]
              }`}
              src={navLogo}
            />
            {
              // SEARCH
            }
            <Search
              navigationTransparency={navigationTransparency}
              navCtx={navCtx}
            />

            {/*<img
              className={`${styles[`nav-item`]} ${styles.search} ${
                styles[
                  !(
                    navigationTransparency &&
                    !navCtx.cartOpen &&
                    !navCtx.savedOpen
                  ) && `nav-img-item`
                ]
              }`}
              src={searcIcon}
            ></img>*/}
          </div>

          <div className={styles[`action-wrapper`]}>
            {
              // SAVED
            }
            <div className={styles["counter-anchor"]}>
              <img
                onClick={navCtx.changeSavedState}
                className={`${styles[`nav-item`]} ${
                  styles[
                    navigationTransparency &&
                      !navCtx.cartOpen &&
                      !navCtx.savedOpen &&
                      `nav-img-item`
                  ]
                } ${styles["saved-item"]}`}
                src={navCtx.savedOpen ? savedIcon : unsavedIcon}
              />
            </div>

            {
              // CART
            }

            <div
              className={styles["counter-anchor"]}
              onClick={navCtx.changeCartState}
            >
              <img
                className={`${styles[`nav-item`]} ${
                  styles[
                    !(
                      navigationTransparency &&
                      !navCtx.cartOpen &&
                      !navCtx.savedOpen
                    ) && `nav-img-item`
                  ]
                } ${styles["cart-item"]}`}
                src={cartIcon}
              />
              <div className={styles["counter"]}>{cartCtx.itemCounter}</div>
            </div>
            {
              // MENU
            }

            <div
              onClick={changeNavigationStateHandler}
              className={`${styles.menu} ${styles[`nav-item`]} ${
                styles[
                  !(
                    navigationTransparency &&
                    !navCtx.cartOpen &&
                    !navCtx.savedOpen
                  ) && `nav-img-item`
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
