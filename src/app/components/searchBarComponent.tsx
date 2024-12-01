'use client'
import styles from "./styles/searchbar.module.css"
import React, { useState, useRef, useEffect } from "react";
import globalStyles from "../page.module.css"

// Dummy data
interface LapTime {
  track: string;
  time: string;
  year: string;
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
      { track: "Kemora", time: "01:12.34", year: "2016" },
      { track: "Veteli", time: "01:08.90", year: "2016" },
      { track: "Jurva", time: "01:09.76", year: "2013" },
      { track: "Ahvenisto", time: "01:14.58", year: "2016" },
    ],
  },
  {
    firstName: "Anna",
    lastName: "Korhonen",
    lapTimes: [
      { track: "Kemora", time: "01:11.45", year: "2016" },
      { track: "Veteli", time: "01:09.12", year: "2016" },
      { track: "Jurva", time: "01:10.23", year: "2016" },
      { track: "Ahvenisto", time: "01:13.87", year: "2016" },
    ],
  },
  {
    firstName: "Jukka",
    lastName: "Lehtinen",
    lapTimes: [
      { track: "Kemora", time: "01:12.78", year: "2016" },
      { track: "Veteli", time: "01:08.56", year: "2016" },
      { track: "Jurva", time: "01:09.98", year: "2016" },
      { track: "Ahvenisto", time: "01:14.23", year: "2016" },
    ],
  },
];

const SearchBarWithDropdown: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // Search query for name
  const [selectedTrack, setSelectedTrack] = useState<string>(""); // Selected track
  const [filteredTime, setFilteredTime] = useState<string | null>(null); // Filtered lap time
  const [filteredYear, setFilteredYear] = useState<string | null>(null); // Filtered lap time
  const [isSearchPerformed, setIsSearchPerformed] = useState<boolean>(false); // Tracks if search has been performed
  const [suggestions, setSuggestions] = useState<string[]>([]); // Autocomplete suggestions
  const [person, setSearchedPerson] = useState<string>("");
  const [track, setSearchedTrack] = useState<string>("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle input change for autocomplete
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 0) {
      const lowerInput = input.toLowerCase();

      // Generate suggestions from people array
      const matches = people
        .map((p) => `${p.firstName} ${p.lastName}`)
        .filter((name) => name.toLowerCase().includes(lowerInput));

      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  // Handle selecting a suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]); // Clear suggestions when a suggestion is selected
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSuggestions([]); // Close suggestions
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle search and filter
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if(!selectedTrack) {
      return;
    }
    const lowerQuery = query.toLowerCase();

    const person = people.find(
      (p) =>
        `${p.firstName} ${p.lastName}`.toLowerCase() === lowerQuery
    );

    if (person) {
      const lap = person.lapTimes.find((l) => l.track === selectedTrack);
      setFilteredTime(lap ? lap.time : null);
      setFilteredYear(lap ? lap.year : null);
      setSearchedPerson(person.firstName + " " + person.lastName)
      if (lap == undefined) {
        setSearchedTrack("Kemora")
      } else {
        setSearchedTrack(lap.track)
      }
    } else {
      setFilteredTime(null);
      setFilteredYear(null);
    }

    setIsSearchPerformed(true); // Mark search as performed
  };

  return (
    <div className={styles.container}>
      <div style={{ position: "relative", marginBottom: "20px" }} className={styles.input} ref={dropdownRef}>
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search by name..."
          className={styles.input}
        />

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul
            style={{
              listStyleType: "none",
              margin: 0,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "white",
              position: "absolute",
              width: "300px",
              zIndex: 1,
            }}
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                style={{
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Dropdown for track selection */}
      <select
        value={selectedTrack}
        onChange={(e) => setSelectedTrack(e.target.value)}
        className={styles.dropdown}
      >
        <option value="" disabled hidden>Valitse rata</option>
        <option value="Kemora">Kemora</option>
        <option value="Veteli">Veteli</option>
        <option value="Jurva">Jurva</option>
        <option value="Ahvenisto">Ahvenisto</option>
      </select>

      {/* Search Button */}
      <div className={styles.buttonContainer}>
        <button
          onClick={handleSearch}
          className={styles.button}>
          Etsi aikoja
        </button>
      </div>

      {/* Render Filtered Lap Time */}
      <div style={{ width: "100%", display: "flex" }}>
        {isSearchPerformed && (
          selectedTrack ? (
            <div className={styles.card}>
              <div className={styles.row}>
              <span className={styles.headerCell}>Nimi</span>
              <span className={styles.headerCell}>Rata</span>
              <span className={styles.headerCell}>Aika</span>
              <span className={styles.headerCell}>Vuosi</span>
              </div>
            <div className={styles.rowNoline}>
              <span className={styles.cell}>{person}</span>
              <span className={styles.cell}>{track}</span>
              <span className={styles.cell}>{filteredTime}</span>
              <span className={styles.cell}>{filteredYear}</span>
            </div>
          </div>
          ) : (
            <div className={styles.card}>
              <div className={styles.row}>
                <span className={styles.headerCell}> Valitse rata</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchBarWithDropdown;
