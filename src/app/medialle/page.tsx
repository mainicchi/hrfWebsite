import styles from "../page.module.css";
import Image from "next/image";
import TextComponent from "../components/textComponent";
import Header from "../components/headerComponent"
import Footer from "../components/footerComponent"
import TextCardComponent from "../components/textCardComponent";
import Navigation from "../components/navComponent"
export default function Medialle() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image className="" src="/images/medialle_header.png" alt="" width="1730" height="800" style={{alignSelf: 'center'}}></Image>
        <h1 className={styles.headerTitle}>Palvelut medialle / Media services</h1>
        <div className={styles.sectionTitle}>
          <div className={styles.underline}>
          </div>
        </div>
        <TextCardComponent containsLinkButton={false} headerText={"KITIssä luettavaa"} bodyText={"KITI:in päivittyy kilpailuun liittyviä dokumentteja ilmoittautumisen jälkeen mm. harjoitteluaikataulu. Muistakaa tutustua niihin. Kilpailun aikana ilmoitustaulu ja Spotify myös käytössä. Kilpailuinfo lähetettiin kilpailijoille sähköpostitse 13.5. (info)"}/>
        <TextCardComponent containsLinkButton={false} headerText={"Kuulutukset kilpailuissa"} bodyText={"Kilpailutoimistossa ilmoittautumisen yhteydessä jaetaan kuuluttajalomake, joka toivotaan palautettavan lauantaina klo 11 mennessä mediatoimistoon (ylävarikko, 2 krs)."}/>
        <TextCardComponent containsLinkButton={true} buttonText="Kilpailun tulokset / Race results" headerText={"Tulokset kilpailujen jälkeen / Link to results"} bodyText={"Kilpailun tulokset ovat nähtävissä internetissä MYLAPS Speedhive -sivustolla."}/>
        <div className={styles.sectionTitle}>
          <div className={styles.underline}>
          </div>
        </div>
        <h2 className={styles.secondTitle}>Linkkejä taustatietoihin / Links to background information</h2>
        <TextCardComponent containsLinkButton={true} buttonText="Lisätietoja" headerText={""} bodyText={"Historic Race Cup koostuu vuonna 2024 kahdeksasta osakilpailusta. Lisätietoja kaudesta löytyy alla olevia linkkinappuloita painamalla."}/>
        <TextCardComponent containsLinkButton={true} buttonText="Lisätietoja" headerText={"Historic Grand Race -arkisto / Historic Grand Race archive"} bodyText={"Tapahtuman järjestää vuonna 1990 perustettu Historic Race Finland ry (HRF). Yhdistyksen tehtävänä on vaalia historiallisten kilpa-autojen harrastusta sekä järjestää historiallisten autojen asfalttiratakilpailuja. Ensimmäinen vastaava kilpailu järjestettiin vuonna 1991 Alastarolla. Ahveniston moottoriradalle Grand Race siirtyi vuonna 1995"}/>
      </main>
    </div>
  );
}