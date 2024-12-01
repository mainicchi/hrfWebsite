'use client'
import styles from "./styles/searchbar.module.css"
import React, { useState } from "react";

interface SearchBarWithDropdownProps {
  placeholder?: string; // Optional placeholder text for the search bar
  onSearch: (query: string, category: string) => void; // Callback function for search
  dropdownOptions: string[]; // Options for the dropdown
}

const SearchBarWithDropdown: React.FC<SearchBarWithDropdownProps> = ({
  placeholder = "Search...",
  onSearch,
  dropdownOptions,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>(dropdownOptions[0]); // Default to the first option

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery, selectedOption); // Pass both search query and selected option
  };

  return (
    <div className={styles.container}>

      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.input}
      />

      {/* Dropdown */}
      <select
        value={selectedOption}
        onChange={handleDropdownChange}
        className={styles.dropdown}
      >
        {dropdownOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className={styles.button}
      >
        Hae
      </button>
    </div>
  );
};

export default SearchBarWithDropdown;
