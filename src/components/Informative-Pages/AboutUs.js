import styles from "./AboutUs.module.css";

//temp
import tempImg from "../../assets/about-front.png";

const AboustUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`head-wrapper`]}>
        <div className={styles[`head-text`]}>MEDITERANEO</div>
        <img className={styles[`head-image`]} src={tempImg} />
      </div>

      <div className={styles[`main-wrapper`]}>
        <div className={styles[`section-title`]}>
          Dobrodošli u naš webshop opreme za dom
        </div>
        <div className={styles[`section-text`]}>
          Dobrodošli u naš webshop opreme za dom, gdje vjerujemo da svaki dom
          treba odražavati jedinstveni stil i osobnost njegovih stanovnika.
        </div>
        <div className={styles[`section-text`]}>
          S našom desetljećima dugom stručnošću u opremi hotela, vila i ureda,
          razumijemo važnost besprijekorne kvalitete i iznimne usluge.
        </div>
        <div className={styles[`section-text`]}>
          Zato je svaki proizvod u našem webshopu pažljivo biran kako bi se
          osigurala trajnost, funkcionalnost i bezvremenska elegancija.
        </div>
        <div className={styles[`section-text`]}>
          Bilo da ste pronicljivi vlasnik kuće koji želi unaprijediti svoj
          životni prostor ili tražite savršen dar za voljenu osobu, MEDITERANEO
          JE vaše krajnje odredište za prvoklasnu opremu.
        </div>
        <div className={styles[`section-text`]}>
          U našem webshopu predviđamo besprijekorno iskustvo kupnje na mreži
          koje našim kupcima omogućuje istraživanje i otkrivanje raznovrsnog
          asortimana komada namještaja i ukrasnih naglasaka iz udobnosti
          vlastitog doma.
        </div>
        <div className={styles[`section-text`]}>
          Cilj nam je poticati zajednicu entuzijasta dizajna i vlasnika
          različitih protora koji dijele strast prema stvaranju primamljivih i
          personaliziranih interijera.
        </div>
        <div className={styles[`section-text`]}>
          Kroz privlačan sadržaj, korisne savjete o dizajnu i interaktivne
          značajke, težimo ponuditi ne samo proizvode, već i obilje resursa za
          podršku i inspiriranje naših kupaca dok oživljavaju svoje vizije.
        </div>
        <div className={styles[`section-text`]}>
          Središnji dio naše vizije je predanost održivosti i etičkom izboru
          izvora.
        </div>
        <div className={styles[`section-text`]}>
          Cilj nam je ponuditi izbor ekološki prihvatljivog, odgovorno
          nabavljenog i izdržljivog namještaja koji je u skladu s vrijednostima
          naših kupaca i doprinosi održivijoj budućnosti našeg planeta.
        </div>
        <div className={styles[`section-text`]}>
          Iznad svega, naša je vizija biti više od pukog trgovca opremom —
          nastojimo biti partner od povjerenja na putu naših kupaca u stvaranju
          domova koji su jedinstveni i iznimni kao što jesu. S nepokolebljivom
          predanošću iznimnoj kvaliteti, zadovoljstvu kupaca i inovacijama,
          predani smo redefiniranju iskustva kupnje namještaja na mreži i
          postajemo odredište za one koji žele poboljšati svoj životni prostor.
        </div>

        <div className={styles[`section-title`]}>
          MI SMO BREND NAMJEŠTAJA KOJI VJERUJE U DRUGAČIJI PRISTUP
        </div>
        <div className={styles[`section-text`]}>
          Sve proizvode biramo s naglaskom na vrhunsku izradu, funkcionalnost i
          estetiku.
        </div>
        <div className={styles[`section-text`]}>
          Osim toga, surađujemo s provjerenim dobaljačima kako bismo osigurali
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
            Naša je vizija biti krajnje odredište za pojedince koji žele
            stvoriti inspirativne i funkcionalne životne prostore, nudeći
            neusporediv izbor visokokvalitetnog namještaja i opreme za dom.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboustUs;
