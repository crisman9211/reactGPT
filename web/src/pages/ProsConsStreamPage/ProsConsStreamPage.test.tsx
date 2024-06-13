import { render } from '@redwoodjs/testing/web'

import ProsConsStreamPage from './ProsConsStreamPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProsConsStreamPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProsConsStreamPage />)
    }).not.toThrow()
  })
})
