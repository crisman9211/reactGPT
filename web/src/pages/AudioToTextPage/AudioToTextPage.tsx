import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AudioToTextPage = () => {
  return (
    <>
      <Metadata title="AudioToText" description="AudioToText page" />

      <h1>AudioToTextPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AudioToTextPage/AudioToTextPage.tsx</code>
      </p>
      <p>
        My default route is named <code>audioToText</code>, link to me with `
        <Link to={routes.audioToText()}>AudioToText</Link>`
      </p>
    </>
  )
}

export default AudioToTextPage
