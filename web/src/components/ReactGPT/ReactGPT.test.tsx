import { render } from '@redwoodjs/testing/web'

import ReactGpt from './ReactGpt'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ReactGpt', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReactGpt />)
    }).not.toThrow()
  })
})
