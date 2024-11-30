import styles from "../page.module.css";
import Image from "next/image";

export default function Kilpailijalista() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image className="" src="/images/kilpailijalista_header.png" alt="" width="1730" height="800"></Image>
        <h1>KILPAILIJALISTA</h1>
        <Image className="" src="/images/hgr2024_kilpailijat.jpg" alt="" width="1284" height="1884"></Image>
        
      </main>
    </div>
  );
}