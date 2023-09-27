import { useState } from 'react'
// Components
import { GifsResultComponent } from './components/GifsResultComponent'
import { HeaderComponent } from './components/Header'
import { InputGifComponent } from './components/InputGif'

export const GifsApp = () => {
  const [querySearch, setQuerySearch] = useState('React JS')
  const updateQuerySearch = (query) => {
    if (querySearch.toLowerCase() === query.toLowerCase()) return
    setQuerySearch(query)
  }

  return (
    <>
      {/* Menu Header */}
      <HeaderComponent />
      {/* Input */}
      <InputGifComponent updateQuerySearch={updateQuerySearch} />
      {/* Results */}
      <GifsResultComponent querySearch={querySearch} />
    </>
  )
}
