'use client'
import styles from "./styles/searchbar.module.css"
import React, { useState, useRef, useEffect } from "react";

// Dummy data
interface LapTime {
  track: string;
  time: string;
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
];

const SearchBarWithDropdown: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // Search query for name
  const [selectedTrack, setSelectedTrack] = useState<string>("Kemora"); // Selected track
  const [filteredTime, setFilteredTime] = useState<string | null>(null); // Filtered lap time
  const [isSearchPerformed, setIsSearchPerformed] = useState<boolean>(false); // Tracks if search has been performed
  const [suggestions, setSuggestions] = useState<string[]>([]); // Autocomplete suggestions

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
  const handleSearch = () => {
    const lowerQuery = query.toLowerCase();

    const person = people.find(
      (p) =>
        `${p.firstName} ${p.lastName}`.toLowerCase() === lowerQuery
    );

    if (person) {
      const lap = person.lapTimes.find((l) => l.track === selectedTrack);
      setFilteredTime(lap ? lap.time : null);
    } else {
      setFilteredTime(null);
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
        <option value="Kemora">Kemora</option>
        <option value="Veteli">Veteli</option>
        <option value="Jurva">Jurva</option>
        <option value="Ahvenisto">Ahvenisto</option>
      </select>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className={styles.button}
      >
        Search
      </button>

      {/* Render Filtered Lap Time */}
      <div>
        {isSearchPerformed && (
          filteredTime ? (
            <p>
              Lap time for <strong>{query}</strong> on <strong>{selectedTrack}</strong> is:{" "}
              <strong>{filteredTime}</strong>
            </p>
          ) : (
            <p>No matching result found</p>
          )
        )}
      </div>
    </div>
  );
};

export default SearchBarWithDropdown;
