import { useState } from 'react'
import { HeaderComponent } from './components/Header'
import { InputGifComponent } from './components/InputGif'

export const GifsApp = () => {
  const [querySearch, setQuerySearch] = useState('')
  const updateQuerySearch = (query) => {
    setQuerySearch(query)
  }

  return (
    <>
      {/* Menu Header */}
      <HeaderComponent />
      {/* Input */}
      <InputGifComponent updateQuerySearch={updateQuerySearch} />
      {/* Results */}
    </>
  )
}
