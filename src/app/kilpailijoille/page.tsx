import styles from "../page.module.css";
import TextComponent from "../components/textComponent";

export default function Kilpailijoille() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>KILPAILIJOILLE</h1>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Lisätietoja" headerText={"Nopeimmat kierrosajat"} bodyText={"Kilpailuun hyväksytään vain kirjalliset sähköisellä lomakkeella tehdyt ilmoittautumiset. Jotta ilmoittautuminen on pätevä tulee lomake olla kaikilta tarvittavilta osilta täytetty ja osallistumismaksu maksettu ajallaan. Ilmoittautumispäivän jälkeen maksaneilta peritään lisämaksu."} pictureLink="" />
        <h2>Huomioitavaa</h2>
      </main>
    </div>
  );
}