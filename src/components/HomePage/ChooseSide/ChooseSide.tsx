import React from 'react'
import styles from './ChooseSide.module.css'
import { THEME_DARK, THEME_LIGHT, THEME_NEUTRAL, useTheme } from '../../../context/ThemeProvider'
import lightSide from './img/light.webp'
import darkSide from './img/dark.webp'
import neutralSide from './img/neutral.jpg'
import cn from 'classnames'

interface IChooseSideItem {
  theme: string
  text: string
  img: string
  classes: string
}

const ChooseSideItem = ({ theme, text, img, classes }: IChooseSideItem) => {
  const isTheme: any = useTheme()

  return (
    <div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)}>
      <div className={styles.item__header}>{text}</div>
      <img src={img} alt={text} className={styles.item__img} />
    </div>
  )
}

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: lightSide,
      classes: styles.itemLight
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: darkSide,
      classes: styles.itemDark
    },
    {
      theme: THEME_NEUTRAL,
      text: 'Neutral',
      img: neutralSide,
      classes: styles.itemNeutral
    }
  ]

  return (
    <div className={styles.container}>
      {elements.map((el, index) => (
        <ChooseSideItem
          key={index}
          theme={el.theme}
          text={el.text}
          img={el.img}
          classes={el.classes}
        />
      ))}
    </div>
  )
}

export default ChooseSide
