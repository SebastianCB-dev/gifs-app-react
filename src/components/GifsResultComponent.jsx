import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import { LoadingComponent } from './LoadingComponent'
import PropTypes from 'prop-types'
import './gifResult.css'

export const GifsResultComponent = ({ querySearch }) => {
  const { gifs, isLoading } = useFetchGifs(querySearch)
  return (
    <>
      <LoadingComponent isLoading={isLoading} />
      <div className='gifs-container'>
        {
          gifs.map((gif) => (
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
