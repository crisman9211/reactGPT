import type { Meta, StoryObj } from '@storybook/react'

import OrthographyPage from './OrthographyPage'

const meta: Meta<typeof OrthographyPage> = {
  component: OrthographyPage,
}

export default meta

type Story = StoryObj<typeof OrthographyPage>

export const Primary: Story = {}
