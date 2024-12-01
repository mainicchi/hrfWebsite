import Image from "next/image";
import styles from "../page.module.css";
import TextComponent from "../components/textComponent";
import Header from "../components/headerComponent"
import Footer from "../components/footerComponent"
import TextCardComponent from "../components/textCardComponent";
import Navigation from "../components/navComponent"
import TextCardSmall from "../components/textCardSmallComponent";

export default function Kilpailu() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image style={{ alignSelf: 'center' }} src="/images/kilpailu_header.png" alt="" width="1730" height="800"></Image>
        <h1 className={styles.headerTitle}>KILPAILU</h1>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Katso lista" headerText={"Kilpailijalista"} bodyText={"Tutustu kaikkiin kilpailijoihin ja heidän suorituksiinsa. Pääset tarkastelemaan täydellistä listaa painamalla alla olevaa nappia."} pictureLink="/images/ohjelma_main.png" />
        <h2 className={styles.secondTitle}>Kilpaluokat</h2>
        <TextComponent pictureOnRight={false} containsLinkButton={false} headerText={"Historic erikoisvakio- ja GTS-autot"} bodyText={"Historic vakio/GT -luokissa noudatetaan kansainvälisiä FIA:n liite K:n sääntöjä. Autot ovat ikäkautensa mukaisia, ainoastaan turvavarusteet ovat nykyaikaiset. Suomessa luokan kilpakalusto jaetaan ikänsä perusteella ikäkausiin: E–F ja G–I. Ikäkauden E–F autot ovat valmistettuja ennen vuotta 1966, kun taas ikäkauden G autot ovat vuosilta 1966–71, H autot vuosilta 1972–76 ja I autot vuosilta 1977–81, tai niillä ajettu kilpaa aikakautenaan. Lisäksi ne jaetaan vielä luokasta riippuen eri sylinteritilavuusluokkiin. \n Historic erikoisvakio- ja GTS-autoja saa virittää, mutta muutosten tulee olla sellaisia jotka olivat käytössä ja hyväksyttyjä jo alkuperäisellä aikakaudella. Moni radalla nähtävä auto onkin aloittanut kilpailu-uransa jo yli 50 vuotta sitten."} pictureLink="/images/HRF_main.png" />
        <TextCardComponent containsLinkButton={false} headerText={"Historic vakio- ja GT-autot, ikäkaudet G-I"} bodyText={"Historic vakio- ja GT-autot, ikäkaudet G-I Ikäkausien G – I (1.1.1966 – 31.12.1981) vakio/GT -autot ovat ikäkautensa (ykkösryhmäläisi) – sarjatuotantoautoja, joissa on perusluokituksen mukainen tekniikka. Ne kilpailevat muiden historic-luokkien tapaan FIA:n liite K:n säännöillä."} />
        <TextCardComponent containsLinkButton={true} buttonText="Lisätietoja" headerText={"Historic urheiluautoprototyypit"} bodyText={"F/GTP - tilavuus vapaa, ikäkausi F"} />
        <TextCardComponent containsLinkButton={true} buttonText="Lisätietoja" headerText={"Fiat Historic Ratapotti"} bodyText={"Fiat Historic Ratapotti -sarja ajaa muiden ykkösryhmäläisten joukossa. Sen kalusto koostuu huokeasti ylläpidettävistä Fiat 127:sta (ryhmä 1), jotka ovat vuosimalliltaan 1971–81 (Mk1 ja Mk2). Moottorina näissä on 903 cc, jota ei saa virittää. Autot ovat luokitustodistuksen 5415:n sekä sallituiden muutoksien mukaisia."} />
        <TextCardSmall boxPosition="right" headerText="Historic Formulat" boxHeaderText="LUOKKAJAKO:" bodyText={"Historic Formulat ovat pääsääntöisesti aitoja ja alkuperäisiä aikakautensa kilpailuhistorian omaavia kilpa-autoja. Merkittävässä tienraivaajan osassa maamme formulahistoriassa ovat olleet Volkswagenin Type 1 -tekniikkaan (VW kupla) perustuvat Formula V:t vuosilta 1966–1981. Muita lähdöissä nähtäviä historiallisia monopostoja ovat Formula Fordit sekä uudemmat Formula V:t, Formula 3:set ja Formula 4:set. Historic Formulat ajavat kansainvälisillä FIA liite K:n sekä aikakautensa säännöillä."} boxBodyText={"A - Yksipaikkaiset rata-autot, ikäkaudet E-F (1947-65); Esim. Formula Midget, Junior, Formula 3 \n B - Formula V 1-kaasutin, ikäkausi \nG (1966–71)\nC - Formula V 2-kaasutin, ikäkausi H - I (1972–82) D - Formula Ford 1600, ikäkaudet G–J (1966–90) E - Formula Super Vee, ikäkaudet H-I (1972–82 F - Formula 4 1996 asti G - Formula 3 2001 asti H - HRF FF1600 + Zetec I - VW1600 J - HRF Formula Ford Duratec"} hasButton={true} buttonText="Lisätietoja"></TextCardSmall>
        <h2 className={styles.secondTitle}>Tulokset</h2>
        <TextCardComponent containsLinkButton={true} buttonText="Lisätietoja" headerText={""} bodyText={"Tulokset ajantasaisesti kisaviikonloppuna HRF:llä on kilpailussa reaaliaikainen ajanoton seuranta. Tuloksia voi seurata kilpailun aikana mobiililaitteilla Race-Monitor -sovelluksella, jonka voi ladata (Android, iOS ja Windows Phone -laitteille) ja web-selaimella (selaimessa on oltava Flash-tuki)."} />
        <TextCardComponent containsLinkButton={true} buttonText="Lisätietoja" headerText={""} bodyText={"Tulokset kilpailujen jälkeen Kilpailun tulokset ovat nähtävissä internetissä MYLAPS Speedhive -sivustolla."} />
      </main>
    </div>
  );
}