import Image from "next/image";
import styles from "./page.module.css";
import TextComponent from "./components/textComponent";
import Footer from "./components/footerComponent"
import TextCardComponent from "./components/textCardComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TextComponent pictureOnRight={false} containsLinkButton={false} />
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Tutustu ohjelmaan"/>
        <TextComponent pictureOnRight={false} containsLinkButton={true} buttonText="Tutustu kilpailijoihin ja seuraa tuloksia täältä"/>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Lue lisää radasta ja tarkemmat kartat täältä"/>
        <TextComponent pictureOnRight={false} containsLinkButton={true} buttonText="Tutustu harrasteparkkiin"/>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Lue lisää"/>
      </main>
    </div>
  );
}
