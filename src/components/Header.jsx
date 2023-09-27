import './css/header.css'

const goToGithubProject = () => {
  globalThis.window.open('https://github.com/SebastianCB-dev/gifs-app-react', '_self')
}

export const HeaderComponent = () => {
  return (
    <>
      <section className='header'>
        <img
          src='../../reacticon.png'
          className='image-header'
          alt='React Logo'
        />
        <h1 className='title-header'>Gifs App</h1>
        <p onClick={goToGithubProject}>
          <i className='fa-brands fa-github' />
        </p>
      </section>
    </>
  )
}
