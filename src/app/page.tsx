import Image from "next/image";
import styles from "./page.module.css";
import TextComponent from "./components/textComponent";
import Header from "./components/headerComponent"
import Footer from "./components/footerComponent"
import TextCardComponent from "./components/textCardComponent";

export default function Home() {
  return (
    <div className={styles.page}>
        <Header></Header>
      <main className={styles.main}>
        <TextCardComponent></TextCardComponent>
        <TextComponent pictureOnRight={false} containsLinkButton={true}/>
        <TextComponent pictureOnRight={true} containsLinkButton={false}/>
        <Footer></Footer>
      </main>
    </div>
  );
}
