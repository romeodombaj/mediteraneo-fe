import styles from "./FrontPage.module.css";
import { Fragment, useContext, useEffect } from "react";
import FrontPageHeader from "./header/FrontPageHeader";
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
      </div>
    </Fragment>
  );
};

export default FrontPage;
