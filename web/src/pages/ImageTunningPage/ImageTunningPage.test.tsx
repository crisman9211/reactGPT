import { render } from '@redwoodjs/testing/web'

import ImageTunningPage from './ImageTunningPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ImageTunningPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageTunningPage />)
    }).not.toThrow()
  })
})
