import { useState } from 'react'

import './inputGif.css'

export const InputGifComponent = ({ updateQuerySearch }) => {
  const [querySearch, setQuerySearch] = useState('')

  const sendData = (e) => {
    e.preventDefault()
    if (querySearch.length === 0) return
    updateQuerySearch(querySearch)
    setQuerySearch('')
  }

  return (
    <form
      className='form'
      onSubmit={sendData}
    >
      <input
        type='text'
        className='input'
        onChange={(e) => setQuerySearch(e.target.value)}
        value={querySearch}
        placeholder='Search using a term eg. League of Legends'
      />
      <button type='submit'><i className='fa fa-search' /></button>
    </form>
  )
}
