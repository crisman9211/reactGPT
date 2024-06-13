import { render } from '@redwoodjs/testing/web'

import GptMessage from './GptMessage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GptMessage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GptMessage />)
    }).not.toThrow()
  })
})
