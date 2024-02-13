import React from 'react'
import image from './img/404.png'
import { useLocation } from 'react-router'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  let location = useLocation()

  return (
    <div>
      <img src={image} className={styles.img} alt="Not Found" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </div>
  )
}

export default NotFoundPage
