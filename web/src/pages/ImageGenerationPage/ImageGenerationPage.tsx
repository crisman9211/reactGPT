import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ImageGenerationPage = () => {
  return (
    <>
      <Metadata title="ImageGeneration" description="ImageGeneration page" />

      <h1>ImageGenerationPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ImageGenerationPage/ImageGenerationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>imageGeneration</code>, link to me with
        `<Link to={routes.imageGeneration()}>ImageGeneration</Link>`
      </p>
    </>
  )
}

export default ImageGenerationPage
