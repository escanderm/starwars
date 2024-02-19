import React, { FC } from 'react'
import styles from './UiInput.module.css'
import '../index.css'
import cn from 'classnames'
import icon from './img/icon-close.svg'

export type UiInputProps = {
  value: string
  handleInputChange: (target: string) => void
  placeholder: string
  classes: string
}

const UiInput: FC<UiInputProps> = ({ value, handleInputChange, placeholder, classes }) => {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <img
        onClick={() => value && handleInputChange('')}
        src={icon}
        className={cn(styles.clear, !value && styles.clear__disabled)}
        alt="Clear"
      />
    </div>
  )
}

export default UiInput
