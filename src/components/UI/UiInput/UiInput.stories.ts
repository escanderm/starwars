import UiInput, { UiInputProps } from './UiInput'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof UiInput> = {
  component: UiInput
}

export default meta
type Story = StoryObj<typeof UiInput>

const [value, setValue] = useState('')
const handleInputChange = (value: string) => {
  setValue(value)
}

const props: UiInputProps = {
  value: value,
  handleInputChange: () => console.log('Input Change'),
  placeholder: 'Placeholder',
  classes: ''
}

export const Default: Story = {
  args: {
    ...props
  }
}
