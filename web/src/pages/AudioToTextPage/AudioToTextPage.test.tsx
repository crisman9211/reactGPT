import { render } from '@redwoodjs/testing/web'

import AudioToTextPage from './AudioToTextPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AudioToTextPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AudioToTextPage />)
    }).not.toThrow()
  })
})
