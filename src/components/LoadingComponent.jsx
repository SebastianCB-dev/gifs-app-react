import PropTypes from 'prop-types'
import './css/loading.css'
export const LoadingComponent = ({ isLoading }) => {
  return (
    <>
      {isLoading &&
      (
        <div className='loader'>
          <p>Fetching data, please wait.</p>
        </div>
      )}
    </>
  )
}

LoadingComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
