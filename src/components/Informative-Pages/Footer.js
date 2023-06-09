import styles from "./Footer.module.css";

//temp

import logo from "../../assets/logo.png";

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
      <div className={styles[`media-wrapper`]}>dw</div>
      <div className={styles.hr} />
      <div className={styles[`copyright-wrapper`]}>
        <div>© 2023 Mediteraneo</div>
      </div>
    </div>
  );
};

export default Footer;
