import React from 'react'

const SearchResult = ({result}) => {
  return (
    <div className='search-result'>
      {result.name}
    </div>
  )
}

export default SearchResult
