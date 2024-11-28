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
        <h1>Palvelut medialle / Media services</h1>
        <h2>Linkkejä taustatietoihin / Links to background information</h2>
        <TextCardComponent/>
        <TextCardComponent/>
      </main>
    </div>
  );
}