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

import GptOthographyMessaje from './GptOthographyMessaje'

const meta: Meta<typeof GptOthographyMessaje> = {
  component: GptOthographyMessaje,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof GptOthographyMessaje>

export const Primary: Story = {}
