import type { Meta, StoryObj } from '@storybook/react'

import AssistantPage from './AssistantPage'

const meta: Meta<typeof AssistantPage> = {
  component: AssistantPage,
}

export default meta

type Story = StoryObj<typeof AssistantPage>

export const Primary: Story = {}
