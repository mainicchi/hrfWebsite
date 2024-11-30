import styles from "../page.module.css";
import Image from "next/image";

export default function Ohjelma() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image src="/images/ohjelma_header.png" alt="" width="1730" height="800"></Image>
        <h1 className={styles.headerTitle} >ALUSTAVA AIKATAULU</h1>
        <div className={styles.sectionTitle}>
          <div className={styles.underline}>
          </div>
        </div>
        <Image className={styles.ohjelmaPhoto} src="/images/hgr2024aikataulu.png" alt="" width="1284" height="1884"></Image>
      </main>
    </div>
  );
}