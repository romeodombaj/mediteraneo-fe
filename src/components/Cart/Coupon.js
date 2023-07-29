import styles from "./Coupon.module.css";

const Coupon = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>PROMO KUPON</div>
      <div className={styles[`input-action`]}>
        <input className={styles.input} placeholder="Unesite kupon" />
        <div className={styles.button}>POŠALJI</div>
      </div>
    </div>
  );
};

export default Coupon;
