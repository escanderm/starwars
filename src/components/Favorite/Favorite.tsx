import icon from './img/bookmark.svg'
import styles from './Favorite.module.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../../containers/PersonPage/PersonPage'

const Favorite = () => {
  const [count, setCount] = useState<number | string>(0)

  const storeData = useSelector((state: IState) => state.favoriteReducer)

  useEffect(() => {
    const lenght = Object.keys(storeData).length
    lenght > 99 ? setCount('...') : setCount(lenght)
  })

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img src={icon} alt="Favorite" className={styles.icon} />
      </Link>
    </div>
  )
}

export default Favorite
