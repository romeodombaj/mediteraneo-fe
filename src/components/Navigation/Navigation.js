import React, { Fragment, useContext, useState, useEffect } from "react";
import styles from "./Navigation.module.css";
import ReactDOM from "react-dom";
import CategoryContext from "../store/category-context";
import CategoryElement from "./Categorisation/CategoryElement";
import NavigationContext from "../store/navigation-context";
import { Link } from "react-router-dom";
import SubcategoryNavigation from "./SubcategoryNavigation";

//images
import logo from "../../assets/logo.png";
import exit from "../../assets/navigation/menu-x.png";
import InfoModal from "../UI/InfoModal";
import LoadingAnimation from "../UI/LoadingAnimation";
import useScrollStop from "../hooks/use-scroll-stop";

const Navigation = (props) => {
  const portalElement = document.getElementById("overlays");

  const categoryCtx = useContext(CategoryContext);
  const navCtx = useContext(NavigationContext);

  const [policyIsOpen, setPolicyIsOpen] = useState(false);
  const [inSubcategories, setInSubcategoreis] = useState(false);
  const [currentSubcategories, setCurrentSubcategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();

  useScrollStop();

  // link to new page
  const categorySelectionHandler = (event) => {
    const selectedCatId = event.target.getAttribute("value");
    navCtx.loadCategory(selectedCatId);
  };

  const openSubcategoriesHandler = (subcategories, category) => {
    setCurrentSubcategories([...subcategories]);
    setCurrentCategory(category);
    setInSubcategoreis(true);
  };

  const closeSubcategoriesHandler = (subcategories) => {
    setInSubcategoreis(false);
  };

  const openOtherPages = (event) => {
    const slug = event.target.getAttribute("value");
    navCtx.loadOtherPages(slug);
  };

  const politicsHandler = () => {
    setPolicyIsOpen(true);
  };

  return (
    <Fragment>
      {policyIsOpen && <InfoModal />}
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.backdrop} onClick={props.onClose}></div>
          <div className={styles.wrapper}>
            {inSubcategories && (
              <SubcategoryNavigation
                onSelected={categorySelectionHandler}
                onClose={closeSubcategoriesHandler}
                subcategories={currentSubcategories}
                category={currentCategory}
              />
            )}
            <div className={styles[`exit-actions`]} onClick={props.onClose}>
              <img src={exit} className={styles[`exit-icon`]} />
              <div className={styles[`exit-text`]}>MENU</div>
            </div>
            <div className={styles[`content-wrapper`]}>
              <div className={styles[`category-wrapper`]}>
                {categoryCtx.categories && categoryCtx.categories.length > 0 ? (
                  categoryCtx.categories.map((category) => {
                    if (category.display === "default") {
                      return (
                        <CategoryElement
                          categories={categoryCtx.categories}
                          key={category.id}
                          category={category}
                          onSelected={categorySelectionHandler}
                          openSubcategories={openSubcategoriesHandler}
                          subcategories={[
                            ...categoryCtx.categories.filter(
                              (el) => el.parent === category.id
                            ),
                          ]}
                        />
                      );
                    }
                  })
                ) : (
                  <div className={styles["loading-anim"]}>
                    <LoadingAnimation />
                  </div>
                )}
              </div>
              <hr className={styles.hr} />
              <div className={styles[`specials-wrapper`]}>
                <div className={styles.special}>Insipiracije</div>
                <div className={styles.special}>Specialprices</div>
                <div className={styles.special}>Zanimljivosti</div>
                <div className={styles.special}>Novo u ponudi</div>
                <div className={styles.special}>Blog</div>
              </div>
              <hr className={styles.hr} />
              <div className={styles[`other-info`]}>
                <div>
                  <div
                    value="/aboutus"
                    onClick={openOtherPages}
                    className={styles[`other-text`]}
                  >
                    O nama
                  </div>
                  <div className={styles[`other-text`]}>Kontakt</div>
                  <div className={styles[`other-text`]}>FAQ</div>
                </div>
                <div className={styles[`right-column`]}>
                  <div
                    onClick={politicsHandler}
                    className={styles[`other-text`]}
                  >
                    Politika privatnosti
                  </div>
                  <div className={styles[`other-text`]}>Načini plaćanja</div>
                  <div className={styles[`other-text`]}>Newsletter</div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default Navigation;
