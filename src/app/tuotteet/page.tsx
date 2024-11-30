import styles from "../page.module.css";
import Image from "next/image";

export default function Tuotteet() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1 className={styles.headerTitle}>HRF-tuotteet</h1>
      <div className={styles.sectionTitle}>
          <div className={styles.underline}>
          </div>
        </div>
      <Image className="" src="/images/tuotteet.jpg" alt="" width="1368" height="953" style={{alignSelf: 'center'}}></Image>
      </main>
    </div>
  );
}