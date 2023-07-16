import styles from "./Footer.module.css";
import CategoryContext from "../store/category-context";

//temp

import logo from "../../assets/logo.png";
import ig from "../../assets/socials/ig.png";
import linked from "../../assets/socials/in.png";
import fb from "../../assets/socials/fb.png";
import yt from "../../assets/socials/yt.png";
import tw from "../../assets/socials/tw.png";
import payments from "../../assets/other/placanja.png";
import { useContext } from "react";
import NavigationContext from "../store/navigation-context";

const Footer = () => {
  const catCtx = useContext(CategoryContext);
  const navCtx = useContext(NavigationContext);

  const openCategory = (e) => {
    const selectedId = e.currentTarget.getAttribute("value");

    navCtx.loadCategory(selectedId);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles[`main-wrapper`]}>
        <div className={styles[`logo-section`]}>
          <img className={styles.logo} src={logo} />
        </div>

        <div className={styles[`quick-links`]}>
          <div className={styles[`link-list-title`]}>KATEGORIJE</div>
          <div className={styles[`link-list`]}>
            {catCtx.categories &&
              catCtx.categories.map((category) => {
                if (category.display === "default")
                  return (
                    <div
                      key={category.id}
                      onClick={openCategory}
                      className={styles[`link`]}
                      value={category.id}
                    >
                      {category.name}
                    </div>
                  );
              })}
          </div>
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles[`media-wrapper`]}>
        <div className={styles[`media-list`]}>
          <img className={styles[`social-icon`]} src={fb} />
          <img className={styles[`social-icon`]} src={ig} />
          <img className={styles[`social-icon`]} src={tw} />
          <img className={styles[`social-icon`]} src={linked} />
          <img className={styles[`social-icon`]} src={yt} />
        </div>
        <img src={payments} className={styles.payment}></img>
      </div>
      <div className={styles.hr} />
      <div className={styles[`copyright-wrapper`]}>
        <div>© 2023 Mediteraneo</div>
      </div>
    </div>
  );
};

export default Footer;
