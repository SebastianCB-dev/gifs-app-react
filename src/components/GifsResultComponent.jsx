import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import { LoadingComponent } from './LoadingComponent'
import PropTypes from 'prop-types'
import './css/gifResult.css'

export const GifsResultComponent = ({ querySearch }) => {
  const { gifs, isLoading } = useFetchGifs(querySearch)
  return (
    <>
      <LoadingComponent isLoading={isLoading} />
      <h2 className='title-search'>{querySearch}</h2>
      <div className='gifs-container'>
        {
          !isLoading && gifs.map((gif) => (
            <GifItem
              key={gif.id}
              title={gif.title}
              urlImg={gif.url}
            />
          ))
        }
      </div>
    </>
  )
}

GifsResultComponent.propTypes = {
  querySearch: PropTypes.string.isRequired
}
