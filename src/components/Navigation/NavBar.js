import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <h2 className={styles.navItem}>OPT</h2>
      <h2 className={styles.navItem}>CRT</h2>
    </div>
  );
};

export default NavBar;
