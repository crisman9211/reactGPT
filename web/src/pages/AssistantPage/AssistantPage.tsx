import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AssistantPage = () => {
  return (
    <>
      <Metadata title="Assistant" description="Assistant page" />

      <h1>AssistantPage</h1>
      <p>
        Find me in <code>./web/src/pages/AssistantPage/AssistantPage.tsx</code>
      </p>
      <p>
        My default route is named <code>assistant</code>, link to me with `
        <Link to={routes.assistant()}>Assistant</Link>`
      </p>
    </>
  )
}

export default AssistantPage
