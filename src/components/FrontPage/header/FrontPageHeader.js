import styles from "./FrontPageHeader.module.css";

//imgs
import TEMPimage from "../../../assets/head-img.png";

const FrontPageHeader = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles[`background-image`]} src={TEMPimage} />
      <div className={styles[`info-wrapper`]}>
        <div className={styles[`head-text`]}>
          RAZNOLIKE OPCIJE KOJE ĆE ZADOVOLJITI <br /> VAŠE POTREBE I
          PREFERENCIJE
        </div>
        <div className={styles.button}>POGLEDAJTE PONUDU</div>
      </div>
    </div>
  );
};

export default FrontPageHeader;
