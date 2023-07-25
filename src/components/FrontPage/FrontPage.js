import styles from "./FrontPage.module.css";
import { Fragment, useContext, useEffect } from "react";
import FrontPageHeader from "./header/FrontPageHeader";
import HotProductsSection from "./main/HotSection/HotProductsSection";
import CategoriesSection from "./main/CategoriesSection/CategoriesSection";
import NavigationContext from "../store/navigation-context";
import SelectedSection from "./main/Selected_section/SelectedSection";
import CategoryShowcaseSection from "./main/Category_showcase_section/CategoryShowcaseSection";
import FeaturedCategories from "./main/Featured_categories_section/FeaturedCategories";

const FrontPage = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <FrontPageHeader />
        <SelectedSection />
        <FeaturedCategories />
        <CategoryShowcaseSection />
        {/*<HotProductsSection load={loadCategory} />
        <PopularProductsSection load={loadCategory} />
  <CategoriesSection load={loadCategory} />*/}
      </div>
    </Fragment>
  );
};

export default FrontPage;
