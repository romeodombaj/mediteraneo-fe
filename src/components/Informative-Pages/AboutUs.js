import styles from "./AboutUs.module.css";

//temp
import tempImg from "../../assets/about-front.png";

const AboustUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`head-wrapper`]}>
        <div className={styles[`head-text`]}>
          U webshopu Mediteraneo pronaći ćete insiprativne i elegantne predmete
          za ređenje vašeg apartmana.
        </div>
        <img className={styles[`head-image`]} src={tempImg} />
      </div>

      <div className={styles[`main-wrapper`]}>
        <div className={styles[`section-title`]}>O nama</div>
        <div className={styles[`section-text`]}>
          Sve proizvode biramo s naglaskom na vrhunsku izradu, funkcionalnost i
          estetiku.
        </div>
        <div className={styles[`section-text`]}>
          Osim toga, surađujemo s provjerenim dobaljačima kako bismo osiguralo
          da naši kupci dobiju proizvode visoke kvalitete. Naš cilj je stvoriti
          ugodno i stilizirano okruženje u vašem domu, nadahnut šarmom i
          opuštenošću.
        </div>

        <div className={styles[`section-title`]}>
          MI SMO BREND NAMJEŠTAJA KOJI VJERUJE U DRUGAČIJI PRISTUP.
        </div>
        <div className={styles[`section-text`]}>
          Sve proizvode biramo s naglaskom na vrhunsku izradu, funkcionalnost i
          estetiku.
        </div>
        <div className={styles[`section-text`]}>
          Osim toga, surađujemo s provjerenim dobaljačima kako bismo osiguralo
          da naši kupci dobiju proizvode visoke kvalitete. Naš cilj je stvoriti
          ugodno i stilizirano okruženje u vašem domu, nadahnut šarmom i
          opuštenošću.
        </div>
      </div>

      <div className={styles[`footer-wrapper`]}>
        <img className={styles[`footer-image`]} src={tempImg} />
        <div className={styles[`footer-description-wrapper`]}>
          <div className={styles[`section-title`]}>Naša vizija</div>
          <div className={styles[`section-text`]}>
            Osim toga, surađujemo s provjerenim dobaljačima kako bismo osiguralo
            da naši kupci dobiju proizvode visoke kvalitete. Naš cilj je
            stvoriti ugodno i stilizirano okruženje u vašem domu, nadahnut
            šarmom i opuštenošću.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboustUs;
