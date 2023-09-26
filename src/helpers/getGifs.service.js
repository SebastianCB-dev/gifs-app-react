import { ENV } from '../environment/env'

export const getGifs = async (query) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ENV.API_KEY}&q=${query}&limit=15`
  const dataGifs = await fetch(url)
  const { data } = await dataGifs.json()
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }))
  return gifs
}
