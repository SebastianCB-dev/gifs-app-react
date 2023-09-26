import PropTypes from 'prop-types'
import './loading.css'
export const LoadingComponent = ({ isLoading }) => {
  return (
    <>
      {true &&
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
