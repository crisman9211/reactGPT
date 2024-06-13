import { render } from '@redwoodjs/testing/web'

import OrthographyPage from './OrthographyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrthographyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrthographyPage />)
    }).not.toThrow()
  })
})
