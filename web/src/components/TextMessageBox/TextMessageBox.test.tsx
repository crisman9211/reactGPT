import { render } from '@redwoodjs/testing/web'

import TextMessageBox from './TextMessageBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TextMessageBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TextMessageBox />)
    }).not.toThrow()
  })
})
