import Image from "next/image";
import styles from "./page.module.css";
import TextComponent from "./components/textComponent";
import Footer from "./components/footerComponent"
import TextCardComponent from "./components/textCardComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image className="" src="/images/HRF_header_main.png" alt="" width="1810" height="860"></Image>
        <TextComponent pictureOnRight={false} containsLinkButton={false} headerText={"Historic Grand Race 2024 - Gulf Historic Race Cupin pääkilpailu"} bodyText={"Historiallisten ratakilpa-autojen 34. Historic Grand Race järjestettiin perinteikkäällä Ahveniston moottoriradalla 17.-18. elokuuta Hämeenlinnassa. Kilpailijamäärältään Suomen suurin moottoriradoilla ajettavista autojen asvalttiratakilpailuista houkutteli paikalle 168 moottoriurheilijaa tiimeineen. \n Tapahtumassa ajetiin Gulf Historic Race Cupin viidennet ja kuudennet osakilpailut. Molempina päivinä ohjelmassa oli yhdeksän kilpalähtöä. Lauantaina aamupäivällä ratkotiin ensin ensimmäisten lähtöjen lähtöpaikat aika-ajoissa.\n Ahveniston harjun katsomoylätasantella oli perinteinen 30-vuotiaiden ja vanhempien runsaan sadan klassikkoajoneuvon nk. harrasteajoneuvoparkki."} pictureLink="/images/HRF_main.png"/>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Tutustu ohjelmaan" headerText={"Ohjelma - Historic Grand Race 2024"} bodyText={"Historic Grand Race 2024 tarjoaa moottoriurheilun ystäville vauhdikkaan ja monipuolisen ohjelman Ahveniston moottoriradalla. Viikonlopun aikana ajetaan Gulf Historic Race Cupin viides ja kuudes osakilpailu, joissa nähdään historiallisten ratakilpa-autojen kiihkeät yhteenotot. Lauantaina päivä alkaa aika-ajoilla, joissa ratkotaan ensimmäisten lähtöjen lähtöpaikat, ja sunnuntaina kilpailijat lähtevät matkaan edellisen päivän kierrosaikojen perusteella. \n Ohjelmaan sisältyy yhteensä yhdeksän kilpailulähtöä molempina päivinä, ja tapahtuma tarjoaa nähtävää myös radan ulkopuolella. Ahveniston harjun katsomossa on esillä yli 100 klassikkoautoa harrasteajoneuvoparkissa, ja Puolustusvoimien osastolla voi ihailla mm. Leopard 2A6 -panssarivaunua."} pictureLink="/images/ohjelma_main.png" />
        <TextComponent pictureOnRight={false} containsLinkButton={true} buttonText="Tutustu kilpailijoihin ja seuraa tuloksia täältä" headerText="Kilpailijat ja tulokset" bodyText={"Historic Grand Race 2024 kokoaa yhteen vaikuttavan joukon moottoriurheilijoita kilpailemaan historiallisten ajoneuvojen mestaruudesta.\n Pysy ajan tasalla kilpailun tapahtumista ja katso, ketkä ovat mukana tänä vuonna. Kilpailijalistat ja ajantasaiset tulokset päivittyvät reaaliajassa, joten voit seurata suosikkikuljettajiesi menestystä hetki hetkeltä."} pictureLink="/images/kilpailijat_main.png"/>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Lue lisää radasta ja tarkemmat kartat täältä" headerText="Rata ja kartat" bodyText={"Ahveniston moottorirata on Pohjoismaiden ainutlaatuisimpia kilparatoja, tunnettu vaihtelevista maastomuodoistaan ja 57-vuotisesta historiastaan. Hämeenlinnan länsipuolella sijaitseva rata on 2840 metriä pitkä, leveydeltään 9-17 metriä, ja sen korkeusvaihtelut ovat jopa 32 metriä.\n Radan huippukohdat yltävät 120 metriin merenpinnasta, tarjoten haasteita ja vauhdikkaita tilanteita niin kilpailijoille kuin katsojille."} pictureLink="/images/kartta_main.png"/>
        <TextComponent pictureOnRight={false} containsLinkButton={true} buttonText="Tutustu harrasteparkkiin" headerText="Harrasteparkki" bodyText={"Harrasteajoneuvoparkki – Historic Grand Race 2024 Ahveniston harjun laella sijaitsevassa harrasteajoneuvoparkissa on esillä yli 30-vuotiaita klassikkoajoneuvoja molempina päivinä klo 9.00–17.00.\n Näyttelyalueelle mahtuu 110 ajoneuvoa päivittäin, joten ennakkoilmoittautuminen on suositeltavaa. Ilmoittautuminen sulkeutuu lauantain osalta perjantaina 16.8. klo 20.00 ja sunnuntain osalta lauantaina 17.8. klo 20.00.\n Alueelle ajetaan Hiihtomäentien kautta, ja koko autokunnalla tulee olla pääsyliput. Ylätasanteelta on erinomaiset näkymät kilparadalle, joten voit nauttia molemmista tapahtumista samanaikaisesti!"} pictureLink="/images/harrasteparkki_main.png"/>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Lue lisää" headerText="Medialle" bodyText={"Historic Grand Race 2024 tarjoaa ainutlaatuisen mahdollisuuden seurata historiallisten kilpa-autojen jännittäviä taisteluita Ahveniston legendaarisella moottoriradalla. Tapahtuma houkuttelee niin kotimaisia kuin kansainvälisiäkin kilpailijoita ja tuo esiin moottoriurheilun historiaa parhaimmillaan.\n Lehdistön edustajille on tarjolla erinomaiset työskentelyolosuhteet tapahtuman aikana. Pressitoimisto sijaitsee keskeisellä paikalla ylävarikolla, tarjoten kaikki tarvittavat palvelut, kuten työtilat ja nopeat yhteydet.\n Akkreditoituminen on helppoa – jätä hakemus etukäteen ja varmista paikkasi seuraamassa kilpailuja aitiopaikalta. Tartu tilaisuuteen raportoida yhdestä Suomen suurimmista moottoriurheilutapahtumista, jossa historia ja vauhti kohtaavat!"} pictureLink="/images/media_main.png"/>
        <h3>2024 HISTORIC GRAND RACESSA KUVATTUJA KUVAGALLERIOITA NETISSÄ</h3>
      </main>
    </div>
  );
}
