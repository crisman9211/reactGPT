import { render } from '@redwoodjs/testing/web'

import ImageGenerationPage from './ImageGenerationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ImageGenerationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageGenerationPage />)
    }).not.toThrow()
  })
})
