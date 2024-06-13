import type { Meta, StoryObj } from '@storybook/react'

import ImageGenerationPage from './ImageGenerationPage'

const meta: Meta<typeof ImageGenerationPage> = {
  component: ImageGenerationPage,
}

export default meta

type Story = StoryObj<typeof ImageGenerationPage>

export const Primary: Story = {}
