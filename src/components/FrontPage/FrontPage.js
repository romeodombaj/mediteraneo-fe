import styles from "./FrontPage.module.css";
import { Fragment, useContext } from "react";
import FrontPageHeader from "./header/FrontPageHeader";
import FrontPageCategories from "./category_section/FrontPageCategories";
import AboutUs from "./story/AboutUs";

const FrontPage = () => {
  return (
    <Fragment>
      <FrontPageHeader />
      <AboutUs />
      <FrontPageCategories />
    </Fragment>
  );
};

export default FrontPage;
