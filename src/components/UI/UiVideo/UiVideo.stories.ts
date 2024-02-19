import { Meta, StoryObj } from '@storybook/react'
import UiVideo from '../UiVideo'
import video from './video/video.mp4'
import { UiVideoProps } from './UiVideo'

const meta: Meta<typeof UiVideo> = {
  component: UiVideo
}

export default meta
type Story = StoryObj<typeof UiVideo>

const props: UiVideoProps = {
  src: video,
  classes: '',
  playbackRate: 1.0
}
export const Default: Story = {
  args: {
    ...props
  }
}
