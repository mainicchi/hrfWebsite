import Image from "next/image";
import styles from "./page.module.css";
import TextComponent from "./components/textComponent";
import Footer from "./components/footerComponent"
import TextCardComponent from "./components/textCardComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TextComponent pictureOnRight={false} containsLinkButton={false} headerText="" bodyText="" pictureLink=""/>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Tutustu ohjelmaan" headerText="" bodyText={""} pictureLink="" />
        <TextComponent pictureOnRight={false} containsLinkButton={true} buttonText="Tutustu kilpailijoihin ja seuraa tuloksia täältä" headerText="" bodyText="" pictureLink=""/>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Lue lisää radasta ja tarkemmat kartat täältä" headerText="" bodyText="" pictureLink=""/>
        <TextComponent pictureOnRight={false} containsLinkButton={true} buttonText="Tutustu harrasteparkkiin" headerText="" bodyText="" pictureLink=""/>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Lue lisää" headerText="" bodyText="" pictureLink=""/>
      </main>
    </div>
  );
}
