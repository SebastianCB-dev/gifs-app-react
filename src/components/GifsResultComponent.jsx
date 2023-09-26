import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifsResultComponent = ({ querySearch }) => {
  const { gifs, isLoading } = useFetchGifs(querySearch)
  return (
    <>
      <h2>{querySearch}</h2>
      {gifs.length}
    </>
  )
}
