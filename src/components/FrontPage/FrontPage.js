import styles from "./FrontPage.module.css";
import { Fragment, useContext } from "react";
import FrontPageHeader from "./header/FrontPageHeader";
import HotProductsSection from "./main/HotSection/HotProductsSection";

import img from "../../assets/ruc0.jpeg";
import arrow from "../../assets/arrow.png";
import PopularProductsSection from "./main/PopularSection/PopularProductsSection";
import CategoriesSection from "./main/CategoriesSection/CategoriesSection";

const FrontPage = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <FrontPageHeader />
        <HotProductsSection />
        <PopularProductsSection />
        <CategoriesSection />
      </div>
    </Fragment>
  );
};

export default FrontPage;
