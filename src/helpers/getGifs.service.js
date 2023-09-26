import { ENV } from '../environment/env'

export const getGifs = async (query) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ENV.API_KEY}&q=${query}`
  const dataGifs = await fetch(url)
  const { data } = await dataGifs.json()
  return data
}
