import React from 'react'
import styles from './ChooseSide.module.css'
import {
  ITheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEUTRAL,
  useTheme
} from '../../../context/ThemeProvider'

const ChooseSide = () => {
  const isTheme: any = useTheme()

  return (
    <>
      <button className={styles.container} onClick={() => isTheme.change(THEME_LIGHT)}>
        Light
      </button>
      <button className={styles.container} onClick={() => isTheme.change(THEME_DARK)}>
        Dark
      </button>
      <button className={styles.container} onClick={() => isTheme.change(THEME_NEUTRAL)}>
        Neutral
      </button>
    </>
  )
}

export default ChooseSide
