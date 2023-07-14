import styles from "./ItemDescription.module.css";

const ItemDescription = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`general-section`]}>
        <div className={styles.title}>OPIS PROIZVODA</div>
        <div className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eagna
          aliqua. Ut enim ad
        </div>
        <div className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eagna
          aliqua. Ut enim ad
        </div>
        <div className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eagna
          aliqua. Ut enim ad
        </div>
        <div className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eagna
          aliqua. Ut enim ad
        </div>
      </div>
      <div className={styles[`material-section`]}>
        <div className={styles.title}>MATERIJALI & ODRŽAVANJE</div>
        <div className={styles.subtitle}>Materijal:</div>
        <div className={styles.paragraph}>
          80% pamuk, 20% viskozno/umjetna svila
        </div>
        <div className={styles.subtitle}>Njega:</div>
        <div className={styles.paragraph}>Maksimalno skupljanje: 6%</div>
        <div className={styles.paragraph}>Maksimalno skupljanje: 6% bas</div>
        <div className={styles.paragraph}>Maksimalno skupljanje: 6% basdf</div>
        <div className={styles.paragraph}>Maksimalno skupljanje: 6% bads a</div>
      </div>
    </div>
  );
};

export default ItemDescription;
