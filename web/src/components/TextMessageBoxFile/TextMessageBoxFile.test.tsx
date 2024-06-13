import { render } from '@redwoodjs/testing/web'

import TextMessageBoxFile from './TextMessageBoxFile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TextMessageBoxFile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TextMessageBoxFile />)
    }).not.toThrow()
  })
})
