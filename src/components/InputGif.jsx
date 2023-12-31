import { useState } from 'react'
import PropTypes from 'prop-types'

import './css/inputGif.css'

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
        maxLength={30}
      />
      <button type='submit'><i className='fa fa-search' /></button>
    </form>
  )
}

InputGifComponent.propTypes = {
  updateQuerySearch: PropTypes.func.isRequired
}
