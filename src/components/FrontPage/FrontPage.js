import styles from "./FrontPage.module.css";
import { Fragment } from "react";
import FrontPageHeader from "./header/FrontPageHeader";
import FrontPageCategories from "./category_section/FrontPageCategories";

const FrontPage = () => {

  return (
    <Fragment>
      <FrontPageHeader />
      <FrontPageCategories></FrontPageCategories>
    </Fragment>
  );
};

export default FrontPage;
