import styles from "./Footer.module.css";

//temp

import logo from "../../assets/logo.png";
import ig from "../../assets/socials/ig.png";
import linked from "../../assets/socials/in.png";
import fb from "../../assets/socials/fb.png";
import yt from "../../assets/socials/yt.png";
import tw from "../../assets/socials/tw.png";
import payments from "../../assets/other/placanja.png";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`main-wrapper`]}>
        <div className={styles[`logo-section`]}>
          <img className={styles.logo} src={logo} />
        </div>
        <div className={styles[`quick-links`]}>
          <div className={styles[`link-list`]}>
            <div className={styles[`link-list-title`]}>KONTAKT & INFO</div>
            <div className={styles[`link`]}>Kontakt</div>
            <div className={styles[`link`]}>FAQ</div>
            <div className={styles[`link`]}>Politika Privatnosti</div>
            <div className={styles[`link`]}>Način plaćanja</div>
          </div>
          <div className={styles[`link-list`]}>
            <div className={styles[`link-list-title`]}>KONTAKT & INFO</div>
            <div className={styles[`link`]}>Kontakt</div>
            <div className={styles[`link`]}>FAQ</div>
            <div className={styles[`link`]}>Politika Privatnosti</div>
            <div className={styles[`link`]}>Način plaćanja</div>
          </div>
          <div className={styles[`link-list`]}>
            <div className={styles[`link-list-title`]}>KONTAKT & INFO</div>
            <div className={styles[`link`]}>Kontakt</div>
            <div className={styles[`link`]}>FAQ</div>
            <div className={styles[`link`]}>Politika Privatnosti</div>
            <div className={styles[`link`]}>Način plaćanja</div>
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
