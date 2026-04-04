import type { Meta, StoryObj } from '@storybook/react'

import { button } from '../config'
import { Button } from './ui'

const meta: Meta<typeof Button> = {
  title: 'shared/ui/button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(button.variants.variant),
    },
    disabled: {
      control: 'radio',
      options: [true, false],
    },
    children: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Body: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Button',
  },
}
