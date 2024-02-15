import UiLoading, { Props } from './UiLoading'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof UiLoading> = {
  component: UiLoading
}

export default meta
type Story = StoryObj<typeof UiLoading>

const props: Props = {
  theme: 'white',
  isShadow: false,
  classes: ''
}
export const Light: Story = {
  args: {
    ...props,
    theme: 'white',
    isShadow: true
  }
}

export const Black: Story = {
  args: {
    ...props,
    theme: 'black'
  }
}

export const Blue: Story = {
  args: {
    ...props,
    theme: 'blue',
    isShadow: true
  }
}
