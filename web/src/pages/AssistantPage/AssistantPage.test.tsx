import { render } from '@redwoodjs/testing/web'

import AssistantPage from './AssistantPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AssistantPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AssistantPage />)
    }).not.toThrow()
  })
})
