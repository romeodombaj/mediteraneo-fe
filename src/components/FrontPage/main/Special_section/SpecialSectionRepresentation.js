import { useEffect, useState } from "react";
import styles from "./SpecialSectionRepresentation.module.css";

const SpecialSectionRepresentation = ({ image }) => {
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(true);
    setTimeout(() => {
      setIsChanged(false);
    }, [1]);
  }, [image]);

  return (
    <div className={styles.wrapper}>
      {image && !isChanged && <img className={styles.image} src={image} />}
    </div>
  );
};

export default SpecialSectionRepresentation;
