import { render } from '@redwoodjs/testing/web'

import ProsConsPage from './ProsConsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProsConsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProsConsPage />)
    }).not.toThrow()
  })
})
