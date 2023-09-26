import './header.css'

const goToGithubProject = () => {
  // TODO: Update URL
  globalThis.window.open('https://www.google.com', '_self')
}

export const HeaderComponent = () => {
  return (
    <>
      <section className='header'>
        <img
          src='../../assets/imgs/reacticon.png'
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
