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
        <h1 className={styles.headerTitle}>RATA JA KARTAT</h1>
        <h2 className={styles.secondTitle}>Ahveniston moottorirata</h2>
        <p>Ahveniston moottorirata on ainutlaatuinen Pohjoismaissa niin sijaintinsa, 57-vuotisen historiansa kuin vaihtelevien maastomuotojensakin puolesta. Rata sijaitsee Hämeenlinnan kaupunkialueen länsipuolella. Pituudeltaan se on 2840 m metriä, leveydeltään 9-17 metriä ja korkeuseroltaan 32 metriä. Alueen korkeimmat kohdat ovat noin 120 metriä merenpinnasta.</p>
        <Image className="" src="/images/hgrkartta.png" alt="" width="1000" height="1490"></Image>
        <h2 className={styles.secondTitle}>Radan palvelukartta</h2>
        <TextCardComponent containsLinkButton={true} buttonText="Lisätietoa" headerText={"Radan sijainti ja kävelyreitit eri katsomoihin"} bodyText={"Moottoriradan osoite on Poltinahontie 47, 13130 Hämeenlinna. Jalankulku yleisöalueelle tapahtuu Hiihtomäentietä"}/>
        <TextCardComponent containsLinkButton={true} buttonText="Lisätietoa" headerText={"Pysäköinti"} bodyText={"Ahveniston moottoriradan läheisyydessä on rajoitetusti luvallisia parkkipaikkoja. Näitä löytyy mm. Pullerin kentän läheisyydestä.\n 30 vuotta ja sitä vanhemmille harrasteajoneuvoille on varattu rajallinen näyttelyparkkialue, josta lisätietoja löytyy harrasteparkkisivulta.Radan linkkejä"}/>
        <TextCardComponent containsLinkButton={true} buttonText="Lisätietoa" headerText={"Radan linkkejä"} bodyText={""}/>
        <TextCardComponent containsLinkButton={true} buttonText="Lisätietoa" headerText={"Linkkejä matkailupalveluihin Hämeenlinnan seudulla"} bodyText={""}/>

      </main>
    </div>
  );
}