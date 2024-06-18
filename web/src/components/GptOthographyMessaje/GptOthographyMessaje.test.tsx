import { render } from '@redwoodjs/testing/web'

import GptOthographyMessaje from './GptOthographyMessaje'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GptOthographyMessaje', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GptOthographyMessaje />)
    }).not.toThrow()
  })
})
