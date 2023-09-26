import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs.service'

export const useFetchGifs = (category = '') => {
  const [isLoading, setIsLoading] = useState(true)
  const [gifs, setGifs] = useState([])

  const requestGifs = async () => {
    const gifs = await getGifs(category)
    setGifs(gifs)
    setIsLoading(false)
  }

  useEffect(() => {
    requestGifs()
  }, [])

  return {
    gifs,
    isLoading
  }
}
