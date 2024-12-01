'use client'
import SearchBarWithDropdown from "../components/searchBarComponent";
import styles from "../page.module.css";

interface LapTime {
  track: string;
  time: string; // Format: mm:ss.00
}

interface Person {
  firstName: string;
  lastName: string;
  lapTimes: LapTime[];
}

const people: Person[] = [
  {
    firstName: "Mikko",
    lastName: "Virtanen",
    lapTimes: [
      { track: "Kemora", time: "01:12.34" },
      { track: "Veteli", time: "01:08.90" },
      { track: "Jurva", time: "01:09.76" },
      { track: "Ahvenisto", time: "01:14.58" },
    ],
  },
  {
    firstName: "Anna",
    lastName: "Korhonen",
    lapTimes: [
      { track: "Kemora", time: "01:11.45" },
      { track: "Veteli", time: "01:09.12" },
      { track: "Jurva", time: "01:10.23" },
      { track: "Ahvenisto", time: "01:13.87" },
    ],
  },
  {
    firstName: "Jukka",
    lastName: "Lehtinen",
    lapTimes: [
      { track: "Kemora", time: "01:12.78" },
      { track: "Veteli", time: "01:08.56" },
      { track: "Jurva", time: "01:09.98" },
      { track: "Ahvenisto", time: "01:14.23" },
    ],
  },
  {
    firstName: "Liisa",
    lastName: "Mäkinen",
    lapTimes: [
      { track: "Kemora", time: "01:10.98" },
      { track: "Veteli", time: "01:07.89" },
      { track: "Jurva", time: "01:08.76" },
      { track: "Ahvenisto", time: "01:12.45" },
    ],
  },
  {
    firstName: "Petri",
    lastName: "Hakala",
    lapTimes: [
      { track: "Kemora", time: "01:13.21" },
      { track: "Veteli", time: "01:09.45" },
      { track: "Jurva", time: "01:10.67" },
      { track: "Ahvenisto", time: "01:15.12" },
    ],
  },
];

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