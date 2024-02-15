import styles from "./FrontPageHeader.module.css";

//imgs

import { useContext } from "react";
import NavigationContext from "../../store/navigation-context";
import FrontPageHeaderImage from "./FrontPageHeaderImage";

const FrontPageHeader = () => {
  const navCtx = useContext(NavigationContext);

  const categorySelectionHandler = (event) => {
    const selectedCatId = 253;
    navCtx.loadCategory(selectedCatId);
  };

  return (
    <div className={styles.wrapper}>
      <FrontPageHeaderImage />
      {/*<div className={styles.title}>MEDITERANEO</div>*/}
      <div className={styles[`info-wrapper`]}>
        <div className={styles[`head-text`]}>
          Otkrijte sofisticiranost svojih prostora uz našu odabranu kolekciju
          luksuzne opreme.
        </div>
        <div className={styles.button} onClick={categorySelectionHandler}>
          POGLEDAJTE PONUDU
        </div>
      </div>
    </div>
  );
};

export default FrontPageHeader;
