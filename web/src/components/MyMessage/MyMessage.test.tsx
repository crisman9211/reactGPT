import { render } from '@redwoodjs/testing/web'

import MyMessage from './MyMessage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyMessage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyMessage />)
    }).not.toThrow()
  })
})
