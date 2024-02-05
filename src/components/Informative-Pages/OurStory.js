import styles from "./OurStory.module.css";

//temp
import tempImg from "../../assets/about-front.png";

const OurStory = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`head-wrapper`]}>
        <div className={styles[`head-text`]}>Naša priča</div>
        <img className={styles[`head-image`]} src={tempImg} />
      </div>

      <div className={styles[`main-wrapper`]}>
        <div className={styles[`section-title`]}>Naša priča</div>
        <div className={styles[`section-text`]}>
          U srcu užurbanog grada nalazila se poznata tvrtka hotelske opreme
          obitelji Pokrivač, svjetionik kvalitete i usluge generacijama.
          Godinama su Pokrivači zadovoljavali potrebe hotela, opskrbljujući ih
          najfinijom robom kako bi svoje objekte podigli na nove visine luksuza
          i sofisticiranosti.
        </div>
        <div className={styles[`section-text`]}>
          Kako su se godišnja doba mijenjala i vjetrovi prilika puhali gradom,
          obitelj Pokrivač počela je razmišljati o budućnosti svog poslovanja. S
          istančanim osjećajem za predviđanje i željom za istraživanjem novih
          horizonata, prepoznali su rastuću potražnju na tržištu – ne samo od
          strane hotela, već i od pronicljivih vlasnika kuća koji nastoje u
          svoje prostore unijeti istu razinu profinjenosti i elegancije.
        </div>
        <div className={styles[`section-text`]}>
          Nadahnuti ovim otkrićem, Pokrivači su krenuli na put preobrazbe.
          Oslanjajući se na svoje dugogodišnje iskustvo i stručnost na području
          hotelske opreme, krenuli su proširiti svoju ponudu na područje opreme
          za dom. Bio je to hrabar pothvat, ali su ga slijedili s
          nepokolebljivom odlučnošću i entuzijazmom.
        </div>
        <div className={styles[`section-text`]}>
          Uz pomnu brigu i pažnju posvećenu detaljima, obitelj Pokrivač
          pripremila je zadivljujuću kolekciju proizvoda dizajniranih da
          poboljšaju svaki aspekt doma. Od raskošne posteljine i luksuznog
          rublja za kupanje do stilskog kuhinjskog posuđa i elegantnog
          namještaja, svaki je predmet ručno odabran kako bi zadovoljio najviše
          standarde kvalitete i izrade
        </div>
        <div className={styles[`section-text`]}>
          Kako je vizija za njihov novi pothvat poprimala oblik, Pokrivači su
          znali da im je potrebna platforma koja će im omogućiti da dopru do
          vlasnika kuća daleko i naširoko. I tako je jednim klikom gumba rođen
          njihov novi webshop – virtualno utočište u kojem su kupci mogli
          istraživati ​​njihov odabrani izbor proizvoda za dom iz udobnosti
          vlastitog doma.
        </div>
        <div className={styles[`section-text`]}>
          Pokretanjem webshopa, obitelj Pokrivač nije štedjela truda u širenju
          vijesti. Kroz ciljane marketinške kampanje i strateška partnerstva
          brzo su privukli pozornost i interes vlasnika kuća diljem zemlje. Od
          udobnih koliba do prostranih imanja, ljudi su posvuda bili željni
          unijeti dašak poznate kvalitete i usluge obitelji Pokrivač u svoje
          domove.
        </div>
        <div className={styles[`section-text`]}>
          Kako su narudžbe počele pristizati, obitelj Pokrivač je neumorno
          radila kako bi osigurala da svaka bude ispunjena s istom razinom
          pažnje i pažnje prema detaljima koji su postali njihov zaštitni znak.
          Od personaliziranih preporuka do brze pomoći, otišli su iznad i dalje
          kako bi premašili očekivanja svojih kupaca, stvarajući trajne odnose
          izgrađene na povjerenju, pouzdanosti i zajedničkom cijenjenju finijih
          stvari u životu.
        </div>
        <div className={styles[`section-text`]}>
          I tako, dok su se vrata njihove nove web-trgovine otvorila kako bi
          poželjeli dobrodošlicu vlasnicima kuća izbliza i iz daljine, putovanje
          obitelji Pokrivač od dobavljača hotelske opreme do dobavljača izvrsne
          robe za dom tek je počelo. Uz njihovu nepokolebljivu predanost
          kvaliteti, usluzi i zadovoljstvu kupaca, znali su da budućnost nosi
          beskrajne mogućnosti – i jedva su čekali da vide kamo će ih put
          odvesti sljedeći put.
        </div>
        <div className={styles[`section-text`]}>
          Izvedeno iz hrvatske riječi za "deku", prezime Pokrivač sa sobom je
          nosilo osjećaj topline, udobnosti i zaštite – kvalitete koje su
          odražavale samu bit proizvoda koje su nudili. Bila je to slučajna veza
          koja se činila gotovo sudbinskom, kao da je sudbina obitelji bila
          utkana u tkivo njihova imena.
        </div>
        <div className={styles[`section-text`]}>
          Za obitelj Pokrivač veza između njihova imena i njihovog proizvoda
          bila je više od puke slučajnosti – bila je to izvor ponosa i
          inspiracije. Služio je kao stalni podsjetnik na njihovu predanost
          pružanju proizvoda kupcima koji ne samo da zadovoljavaju njihove
          praktične potrebe, već ih i obavijaju osjećajem udobnosti i
          sigurnosti, poput tople deke u hladnoj noći.
        </div>
        <div className={styles[`section-text`]}>
          I tako, kako je obitelj Pokrivač nastavila graditi svoje nasljeđe kao
          dobavljači izvrsne robe za dom, utješili su se spoznajom da će njihovo
          ime zauvijek biti sinonim za kvalitetu, toplinu i jednostavne radosti
          doma.
        </div>
      </div>
    </div>
  );
};

export default OurStory;
