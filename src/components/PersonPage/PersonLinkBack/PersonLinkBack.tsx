import styles from './PersonLinkBack.module.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import iconBack from './img/back.svg'

const PersonLinkBack = () => {
  const history = useNavigate()
  const handleGoBack = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    history(-1)
  }

  return (
    <a href="#" onClick={handleGoBack} className={styles.link}>
      <img src={iconBack} alt="go back" className={styles.link__img} />
      <span>Go Back</span>
    </a>
  )
}

export default PersonLinkBack
