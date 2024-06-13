import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TextToAudioPage = () => {
  return (
    <>
      <Metadata title="TextToAudio" description="TextToAudio page" />

      <h1>TextToAudioPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TextToAudioPage/TextToAudioPage.tsx</code>
      </p>
      <p>
        My default route is named <code>textToAudio</code>, link to me with `
        <Link to={routes.textToAudio()}>TextToAudio</Link>`
      </p>
    </>
  )
}

export default TextToAudioPage
