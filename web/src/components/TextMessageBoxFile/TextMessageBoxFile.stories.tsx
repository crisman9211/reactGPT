// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import TextMessageBoxFile from './TextMessageBoxFile'

const meta: Meta<typeof TextMessageBoxFile> = {
  component: TextMessageBoxFile,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TextMessageBoxFile>

export const Primary: Story = {}
