'use client'
import SearchBarWithDropdown from "../components/searchBarComponent";
import styles from "../page.module.css";

const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Add your search logic here (e.g., filter a list, send an API request, etc.)
  };

export default function Laptime() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1 className={styles.headerTitle}>Kierrosajat</h1>
      <SearchBarWithDropdown onSearch={handleSearch} dropdownOptions={['Kemora', 'Veteli', 'Jurva', 'Ahvenisto']}/>
      </main>
    </div>
  );
}