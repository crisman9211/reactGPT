import type { Meta, StoryObj } from '@storybook/react'

import ReactGptPage from './ReactGptPage'

const meta: Meta<typeof ReactGptPage> = {
  component: ReactGptPage,
}

export default meta

type Story = StoryObj<typeof ReactGptPage>

export const Primary: Story = {}
