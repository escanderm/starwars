import React, { FC } from 'react'
import styles from './UiButton.module.css'
import '../index.css'
import cn from 'classnames'

export type UiButtonProps = {
  handleFunc: () => void
  disabled: string | null
  text: string
  theme?: any
  classes?: string
  primary?: string
}

const UiButton: FC<UiButtonProps> = ({ text, disabled, handleFunc, theme = 'dark', classes }) => {
  return (
    <button
      onClick={handleFunc}
      disabled={!disabled}
      // @ts-ignore
      className={cn(styles.button, styles[theme], classes)}>
      {text}
    </button>
  )
}

export default UiButton
