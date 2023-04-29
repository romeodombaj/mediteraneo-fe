import styles from "./FrontPage.module.css";
import { Fragment, useContext } from "react";
import FrontPageHeader from "./header/FrontPageHeader";
import FrontPageCategories from "./category_section/FrontPageCategories";

import img from "../../assets/ruc0.jpeg";
import arrow from "../../assets/arrow.png";

const FrontPage = () => {
  return (
    <Fragment>
      <FrontPageHeader />
      <FrontPageCategories />
    </Fragment>
  );
};

export default FrontPage;
