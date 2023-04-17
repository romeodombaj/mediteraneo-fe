import styles from "./ItemListHeader.module.css";
import { Fragment, useState, useEffect } from "react";
import logoImg from "../../assets/logo.png";
import dummy_headImage from "../../assets/ruc2.jpg";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ItemListHeader = (props) => {
  const [headerAnimationTrigger, setHeaderAnimationTrigger] = useState(``);
  const [headerStop, setHeaderStop] = useState(``);
  const [newRef, inView] = useInView();
  const [newRef2, inView2] = useInView();
  const [newRef3, inView3] = useInView();
  const [newRef4, inView4] = useInView();
  const [newRef5, inView5] = useInView();
  const [newRef6, inView6] = useInView();

  const headerDownAnimation = () => {
    setHeaderAnimationTrigger(`head-animated`);
  };

  const headerUpAnimation = () => {
    setHeaderAnimationTrigger(``);
  };

  useEffect(() => {
    console.log(inView);
    if (inView2 == true) {
      headerUpAnimation();
    }
  }, [inView2]);

  useEffect(() => {
    if (inView6 == true) {
      setHeaderAnimationTrigger(`head-animated1`);
      setHeaderStop(`head-stop`);
    } else if (inView5 == true) {
      setHeaderStop(``);
      setHeaderAnimationTrigger(`head-animated2`);
    } else if (inView4 == true) {
      setHeaderStop(``);
      setHeaderAnimationTrigger(`head-animated3`);
    } else if (inView3 == true) {
      setHeaderStop(``);
      setHeaderAnimationTrigger(`head-animated4`);
    } else if (inView == true) {
      setHeaderStop(``);
      setHeaderAnimationTrigger(`head-animated5`);
    }
  }, [inView, , inView3, inView4, inView5, inView6]);

  return (
    <Fragment>
      <div className={styles[`head-section`]}>
        <div className={`${styles[`head-wrapper`]} ${styles[`${headerStop}`]}`}>
          <div className={styles.title}>RUČNICI</div>
          <div className={styles[`image-wrapper`]}>
            <img
              src={dummy_headImage}
              className={`${styles[`head-image`]} ${
                styles[`${headerAnimationTrigger}`]
              }`}
            />
          </div>
        </div>
      </div>

      <h2 ref={newRef} className={styles.undersection}></h2>
      <h2 ref={newRef3} className={styles.undersection}></h2>
      <h2 ref={newRef4} className={styles.undersection}></h2>
      <h2 ref={newRef5} className={styles.undersection}></h2>
      <h2 ref={newRef6} className={styles.stopsection}></h2>
      <Link to="/">
        <img ref={newRef2} className={styles.logo} src={logoImg}></img>
      </Link>
    </Fragment>
  );
};

export default ItemListHeader;
