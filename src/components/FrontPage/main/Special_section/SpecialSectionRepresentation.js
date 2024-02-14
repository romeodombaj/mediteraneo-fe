import { useEffect, useState } from "react";
import styles from "./SpecialSectionRepresentation.module.css";

const SpecialSectionRepresentation = ({ image, name }) => {
  return (
    <div className={styles.wrapper}>
      {image && <img className={styles.image} src={image} />}

      <div className={styles.description}>
        <div className={styles["description-title"]}>{name}</div>
        <div className={styles["description-show"]}>Pogledajte ponudu</div>
        <div className={styles["description-more"]}>SAZNAJTE VIŠE</div>
      </div>
    </div>
  );
};

export default SpecialSectionRepresentation;
