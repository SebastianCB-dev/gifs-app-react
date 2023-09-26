import PropTypes from 'prop-types'
import './gifItem.css'

export const GifItem = ({ title, urlImg }) => {
  return (
    <div className='gif-item'>
      <img src={urlImg} alt='No' />
      <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired
}
