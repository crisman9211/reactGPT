import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ImageTunningPage = () => {
  return (
    <>
      <Metadata title="ImageTunning" description="ImageTunning page" />

      <h1>ImageTunningPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ImageTunningPage/ImageTunningPage.tsx</code>
      </p>
      <p>
        My default route is named <code>imageTunning</code>, link to me with `
        <Link to={routes.imageTunning()}>ImageTunning</Link>`
      </p>
    </>
  )
}

export default ImageTunningPage
