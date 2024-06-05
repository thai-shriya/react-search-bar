import React from 'react';
import { FaSearch } from "react-icons/fa"
import "./SearchBar.css"
import { useState } from 'react';


const SearchBar = () => {
    const [input, setInput] = useState("");
  return (
    <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input placeholder='Type to search' value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}

export default SearchBar
