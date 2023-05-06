import styles from "./FrontPage.module.css";
import { Fragment, useContext } from "react";
import FrontPageHeader from "./header/FrontPageHeader";
import HotProductsSection from "./main/HotSection/HotProductsSection";
import PopularProductsSection from "./main/PopularSection/PopularProductsSection";
import CategoriesSection from "./main/CategoriesSection/CategoriesSection";
import NavigationContext from "../store/navigation-context";

const FrontPage = () => {
  const navCtx = useContext(NavigationContext);

  const loadCategory = (event) => {
    const selectedCatId = event.target.getAttribute("value");
    navCtx.loadCategory(selectedCatId);
  };

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <FrontPageHeader />
        <HotProductsSection load={loadCategory} />
        <PopularProductsSection load={loadCategory} />
        <CategoriesSection load={loadCategory} />
      </div>
    </Fragment>
  );
};

export default FrontPage;
