import { render } from '@redwoodjs/testing/web'

import TextMessageBoxSelect from './TextMessageBoxSelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TextMessageBoxSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TextMessageBoxSelect />)
    }).not.toThrow()
  })
})
