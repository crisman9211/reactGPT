import { render } from '@redwoodjs/testing/web'

import ChatTemplate from './ChatTemplate'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChatTemplate', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatTemplate />)
    }).not.toThrow()
  })
})
