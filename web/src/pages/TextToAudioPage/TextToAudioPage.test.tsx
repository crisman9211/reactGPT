import { render } from '@redwoodjs/testing/web'

import TextToAudioPage from './TextToAudioPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TextToAudioPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TextToAudioPage />)
    }).not.toThrow()
  })
})
