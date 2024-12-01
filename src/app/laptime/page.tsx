'use client'
import SearchBarWithDropdown from "../components/searchBarComponent";
import styles from "../page.module.css";

export default function Laptime() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.headerTitle}>Kierrosajat</h1>
        <SearchBarWithDropdown/>
      </main>
    </div>
  );
}