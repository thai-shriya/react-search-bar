import { useState } from 'react'
import './App.css'
import {SearchBar} from './components/SearchBar'

function App() {
 

  return (
    <div className="App">
      <div className="search-bar-container"><SearchBar/>
      <div>Search bar results</div>
      </div>
      </div>
  )
}

export default App
