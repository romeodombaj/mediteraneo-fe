import styles from "./Total.module.css";

const Total = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>UKUPNI IZNOS KOŠARICE</div>
      <div className={styles.section}>
        <div className={styles[`section-title`]}>UKUPNO</div>
        <div className={styles[`section-details`]}>
          <div> {props.price} €</div>
          <div className={styles[`description-detail`]}>
            Dostava se ne naplaćuje na kupnju iznad 53,09 € / 400 kn
          </div>
        </div>
      </div>
      <div className={styles[`section-divider`]} />
      <div className={styles.section}>
        <div className={styles[`section-title`]}>DOSTAVA</div>
        <div className={styles[`section-details`]}>
          <div>Besplatna dostava</div>
          <div>Osobno preuzimanje u dućanu</div>
          <div className={styles[`description-detail`]}>
            Opcije dostave bit će ažurirane na stranici naplate.
          </div>
          <div>0,00 €</div>
        </div>
      </div>
    </div>
  );
};

export default Total;
