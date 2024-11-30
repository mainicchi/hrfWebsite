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
      <Image className="" src="/images/medialle_header.png" alt="" width="1730" height="800"></Image>
        <h1>Palvelut medialle / Media services</h1>
        <TextCardComponent containsLinkButton={false}/>
        <TextCardComponent containsLinkButton={false}/>
        <TextCardComponent containsLinkButton={true}/>
        <h2>Linkkejä taustatietoihin / Links to background information</h2>
        <TextCardComponent containsLinkButton={true}/>
        <TextCardComponent containsLinkButton={true}/>
      </main>
    </div>
  );
}