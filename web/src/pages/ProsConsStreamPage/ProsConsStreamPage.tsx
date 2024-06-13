import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ProsConsStreamPage = () => {
  return (
    <>
      <Metadata title="ProsConsStream" description="ProsConsStream page" />

      <h1>ProsConsStreamPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ProsConsStreamPage/ProsConsStreamPage.tsx</code>
      </p>
      <p>
        My default route is named <code>prosConsStream</code>, link to me with `
        <Link to={routes.prosConsStream()}>ProsConsStream</Link>`
      </p>
    </>
  )
}

export default ProsConsStreamPage
