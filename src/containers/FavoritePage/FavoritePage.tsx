import React, { useEffect, useState } from 'react'
import { ActionProps } from '../../store/reducers/favoriteReducer'
import { useSelector } from 'react-redux'
import PeopleList from '../../components/PeoplePage/PeopleList'
import styles from './FavoritePage.module.css'

interface IState {
  favoriteReducer: ActionProps[]
}
const FavoritePage = () => {
  const [people, setPeople] = useState<any>([])

  const storeData = useSelector((state: IState) => state.favoriteReducer)

  useEffect(() => {
    const arr = Object.entries(storeData)
    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1]
        }
      })
      setPeople(res)
    }
  }, [])

  return (
    <div>
      <h1 className="header__text">FavoritesPage</h1>
      {people.length ? <PeopleList people={people} /> : <h2 className={styles.comment}>No data</h2>}
    </div>
  )
}

export default FavoritePage
