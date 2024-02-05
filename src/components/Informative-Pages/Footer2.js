import styles from "./Footer2.module.css";
import CategoryContext from "../store/category-context";

import logo from "../../assets/logo.png";
import ig from "../../assets/socials/ig.png";
import linked from "../../assets/socials/in.png";
import fb from "../../assets/socials/fb.png";
import yt from "../../assets/socials/yt.png";
import tw from "../../assets/socials/tw.png";
import payments from "../../assets/other/placanja.png";
import { useContext } from "react";
import NavigationContext from "../store/navigation-context";

const Footer2 = () => {
  const catCtx = useContext(CategoryContext);
  const navCtx = useContext(NavigationContext);

  const openCategory = (e) => {
    const selectedId = e.currentTarget.getAttribute("value");

    navCtx.loadCategory(selectedId);
  };

  const openOtherPages = (event) => {
    const slug = event.target.getAttribute("value");
    navCtx.loadOtherPages(slug);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles[`main-wrapper`]}>
        <div className={styles[`link-section`]}>
          <div className={styles[`quick-links`]}>
            <div
              className={styles[`link-list-title`]}
              onClick={openOtherPages}
              value="aboutus"
            >
              O nama
            </div>
            <div className={styles[`link-list`]}>
              <div
                className={styles[`link`]}
                onClick={openOtherPages}
                value="aboutus"
              >
                Tko smo
              </div>
              <div
                className={styles[`link`]}
                onClick={openOtherPages}
                value="ourstory"
              >
                Naša priča
              </div>
              <div className={styles[`link`]}>Nastanak</div>
              <div className={styles[`link`]}>Poslovanje</div>
            </div>
          </div>
          <div className={styles[`quick-links`]}>
            <div className={styles[`link-list-title`]}>Kontakt</div>
            <div className={styles[`link-list`]}>
              <div className={styles[`link`]}>Kontaktirajte nas</div>
              <div className={styles[`link`]}>FAQ</div>
              <div className={styles[`link`]}>Pitanja</div>
              <div className={styles[`link`]}>Lokacija</div>
            </div>
          </div>
          <div className={styles[`quick-links`]}>
            <div className={styles[`link-list-title`]}>Partnerstva</div>
            <div className={styles[`link-list`]}>
              <div className={styles[`link`]}>Naši partneri</div>
              <div className={styles[`link`]}>Projekti</div>
              <div className={styles[`link`]}>Iskustvo</div>
              <div className={styles[`link`]}>Način poslovanja</div>
            </div>
          </div>
          <div className={styles[`quick-links`]}>
            <div className={styles[`link-list-title`]}>Pridružite nam se</div>
            <div className={styles[`link-list`]}>
              <div className={styles[`link`]}>Prijavite se za novosti</div>
              <div className={styles[`link`]}>Postanite član</div>
              <div className={styles[`link`]}>Naša obitelj</div>
            </div>
          </div>
        </div>

        <div className={styles[`newsletter-section`]}>
          <div className={styles[`newsletter-text`]}>
            PRETPLATI SE NA NEWSLETTER
          </div>
          <button className={styles[`subscribe-button`]}>Pretplati se</button>
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

export default Footer2;
