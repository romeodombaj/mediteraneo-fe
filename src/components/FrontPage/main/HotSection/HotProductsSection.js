import styles from "./HotProductsSection.module.css";
import HotItem from "./HotItem";

const HotProductsSection = () => {
  return (
    <div className={styles.wrapper}>
      <HotItem />
      <HotItem />
      <HotItem />
      <HotItem />
      <HotItem />
    </div>
  );
};

export default HotProductsSection;
