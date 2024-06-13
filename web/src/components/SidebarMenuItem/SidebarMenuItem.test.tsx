import { render } from '@redwoodjs/testing/web'

import SidebarMenuItem from './SidebarMenuItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SidebarMenuItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarMenuItem />)
    }).not.toThrow()
  })
})
