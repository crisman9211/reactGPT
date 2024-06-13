import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ProsConsPage = () => {
  return (
    <>
      <Metadata title="ProsCons" description="ProsCons page" />

      <h1>ProsConsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProsConsPage/ProsConsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>prosCons</code>, link to me with `
        <Link to={routes.prosCons()}>ProsCons</Link>`
      </p>
    </>
  )
}

export default ProsConsPage
