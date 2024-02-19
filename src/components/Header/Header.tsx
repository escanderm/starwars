import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import Favorite from '../Favorite'
import { THEME_DARK, THEME_LIGHT, THEME_NEUTRAL, useTheme } from '../../context/ThemeProvider'
import imgDroid from './img/droid.png'
import imgSabers from './img/lightsaber.png'
import imgStation from './img/space-station.png'

const Header = () => {
  const [icon, setIcon] = useState(imgDroid)
  const isTheme = useTheme()

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgSabers)
        break
      case THEME_DARK:
        setIcon(imgStation)
        break
      case THEME_NEUTRAL:
        setIcon(imgDroid)
        break
      default:
        setIcon(imgDroid)
    }
  }, [isTheme])

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="" />

      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  )
}

export default Header
