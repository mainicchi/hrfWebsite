import Image from "next/image";
import styles from "../page.module.css";
import TextComponent from "../components/textComponent";
import Header from "../components/headerComponent"
import Footer from "../components/footerComponent"
import TextCardComponent from "../components/textCardComponent";
import Navigation from "../components/navComponent"

export default function RataJaKartat() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image className="" src="/images/rata_header.png" alt="" width="1730" height="800"></Image>
        <h1>RATA JS KARTAT</h1>
        <h2>Ahveniston moottorirata</h2>
        <p>Ahveniston moottorirata on ainutlaatuinen Pohjoismaissa niin sijaintinsa, 57-vuotisen historiansa kuin vaihtelevien maastomuotojensakin puolesta. Rata sijaitsee Hämeenlinnan kaupunkialueen länsipuolella. Pituudeltaan se on 2840 m metriä, leveydeltään 9-17 metriä ja korkeuseroltaan 32 metriä. Alueen korkeimmat kohdat ovat noin 120 metriä merenpinnasta.</p>
        <Image className="" src="/images/hgrkartta.png" alt="" width="1000" height="1490"></Image>
        <h2>Radan palvelukartta</h2>
        <TextCardComponent containsLinkButton={true}/>
        <TextCardComponent containsLinkButton={true}/>
        <TextCardComponent containsLinkButton={true}/>
        <TextCardComponent containsLinkButton={true}/>

      </main>
    </div>
  );
}