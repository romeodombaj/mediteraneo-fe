import styles from "./Total.module.css";

const Total = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>UKUPNI IZNOS KOŠARICE</div>
      <div className={styles.section}>
        <div className={styles[`section-title`]}>UKUPNO</div>
        <div className={styles[`section-details`]}>
          <div> 90,80 €</div>
          <div className={styles[`description-detail`]}>
            Dostava se ne naplaćuje na kupnju iznad 53,09 90,990,80 € / 400 kn
          </div>
        </div>
      </div>
      <div className={styles[`section-divider`]} />
      <div className={styles.section}>
        <div className={styles[`section-title`]}>UKUPNO</div>
        <div className={styles[`section-details`]}>
          <div> 90,80 €</div>
          <div className={styles[`description-detail`]}>
            Dostava se ne naplaćuje na kupnju iznad 53,09 90,990,80 € / 400 kn
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
