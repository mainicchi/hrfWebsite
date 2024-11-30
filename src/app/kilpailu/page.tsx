import Image from "next/image";
import styles from "../page.module.css";
import TextComponent from "../components/textComponent";
import Header from "../components/headerComponent"
import Footer from "../components/footerComponent"
import TextCardComponent from "../components/textCardComponent";
import Navigation from "../components/navComponent"

export default function Kilpailu() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image className="" src="/images/kilpailu_header.png" alt="" width="1730" height="800"></Image>
        <h1>KILPAILU</h1>
      <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Katso lista" headerText={"Kilpailijalista"} bodyText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} pictureLink="/images/ohjelma_main.png" />
      <h2>Kilpaluokat</h2>
      <TextComponent pictureOnRight={false} containsLinkButton={false} headerText={"Historic erikoisvakio- ja GTS-autot"} bodyText={"Historic vakio/GT -luokissa noudatetaan kansainvälisiä FIA:n liite K:n sääntöjä. Autot ovat ikäkautensa mukaisia, ainoastaan turvavarusteet ovat nykyaikaiset. Suomessa luokan kilpakalusto jaetaan ikänsä perusteella ikäkausiin: E–F ja G–I. Ikäkauden E–F autot ovat valmistettuja ennen vuotta 1966, kun taas ikäkauden G autot ovat vuosilta 1966–71, H autot vuosilta 1972–76 ja I autot vuosilta 1977–81, tai niillä ajettu kilpaa aikakautenaan. Lisäksi ne jaetaan vielä luokasta riippuen eri sylinteritilavuusluokkiin. \n Historic erikoisvakio- ja GTS-autoja saa virittää, mutta muutosten tulee olla sellaisia jotka olivat käytössä ja hyväksyttyjä jo alkuperäisellä aikakaudella. Moni radalla nähtävä auto onkin aloittanut kilpailu-uransa jo yli 50 vuotta sitten."} pictureLink="/images/HRF_main.png"/>
      <h4>Historic vakio- ja GT-autot, ikäkaudet G-I</h4>
      <p>Historic vakio- ja GT-autot, ikäkaudet G-I Ikäkausien G – I (1.1.1966 – 31.12.1981) vakio/GT -autot ovat ikäkautensa "ykkösryhmäläisiä" – sarjatuotantoautoja, joissa on perusluokituksen mukainen tekniikka. Ne kilpailevat muiden historic-luokkien tapaan FIA:n liite K:n säännöillä.</p>
      <TextCardComponent/>
      <TextCardComponent/>
      <h4>Historic Formulat</h4>
      <p>Historic Formulat ovat pääsääntöisesti aitoja ja alkuperäisiä aikakautensa kilpailuhistorian omaavia kilpa-autoja. Merkittävässä tienraivaajan osassa maamme formulahistoriassa ovat olleet Volkswagenin Type 1 -tekniikkaan (VW kupla) perustuvat Formula V:t vuosilta 1966–1981. Muita lähdöissä nähtäviä historiallisia monopostoja ovat Formula Fordit sekä uudemmat Formula V:t, Formula 3:set ja Formula 4:set. Historic Formulat ajavat kansainvälisillä FIA liite K:n sekä aikakautensa säännöillä.</p>
      <h2>Tulokset</h2>
      <TextCardComponent/>
      <TextCardComponent/>
      </main>
    </div>
  );
}