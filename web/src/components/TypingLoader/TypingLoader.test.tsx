import { render } from '@redwoodjs/testing/web'

import TypingLoader from './TypingLoader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TypingLoader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TypingLoader />)
    }).not.toThrow()
  })
})
