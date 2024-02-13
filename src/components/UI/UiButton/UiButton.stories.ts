import UiButton, { UiButtonProps } from './UiButton'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof UiButton> = {
  component: UiButton
}

export default meta
type Story = StoryObj<typeof UiButton>

const props: UiButtonProps = {
  handleFunc: () => console.log('Click'),
  disabled: null,
  text: 'Hello',
  theme: 'light',
  classes: ''
}
export const Light: Story = {
  args: {
    ...props,
    theme: 'light'
  }
}

export const Dark: Story = {
  args: {
    ...props,
    theme: 'dark'
  }
}

export const Disables: Story = {
  args: {
    ...props,
    disabled: 'yep'
  }
}
