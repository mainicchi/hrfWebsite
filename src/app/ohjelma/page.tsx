import styles from "../page.module.css";
import Image from "next/image";

export default function Ohjelma() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image className="" src="/images/ohjelma_header.png" alt="" width="1730" height="800"></Image>
        <h1>ALUSTAVA AIKATAULU</h1>
        <Image className="" src="/images/hgr2024aikataulu.png" alt="" width="1284" height="1884"></Image>
      </main>
    </div>
  );
}