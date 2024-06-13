import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const OrthographyPage = () => {
  return (
    <>
      <Metadata title="Orthography" description="Orthography page" />

      <h1>OrthographyPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/OrthographyPage/OrthographyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>orthography</code>, link to me with `
        <Link to={routes.orthography()}>Orthography</Link>`
      </p>
    </>
  )
}

export default OrthographyPage
