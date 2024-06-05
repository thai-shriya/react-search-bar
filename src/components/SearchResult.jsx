import React from 'react'

const SearchResult = ({result}) => {
  return (
      <div className='search-result' onClick={ (e) => alert(`You clicked on ${result.name}`)}>
      {result.name}
    </div>
  )
}

export default SearchResult
