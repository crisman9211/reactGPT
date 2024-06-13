import { render } from '@redwoodjs/testing/web'

import ReactGptPage from './ReactGptPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReactGptPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReactGptPage />)
    }).not.toThrow()
  })
})
