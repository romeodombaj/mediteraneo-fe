import styles from "./FrontPageHeader.module.css";

//imgs
import TEMPimage from "../../../assets/head-img.png";

const FrontPageHeader = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles[`background-image`]} src={TEMPimage} />
      <div className={styles.title}>MEDITERANEO</div>
      <div className={styles[`info-wrapper`]}>
        <div className={styles[`head-text`]}>
          Otkrijte sofisticiranost svojih prostora uz našu odabranu kolekciju
          luksuzne opreme.
        </div>
        <div className={styles.button}>POGLEDAJTE PONUDU</div>
      </div>
    </div>
  );
};

export default FrontPageHeader;
