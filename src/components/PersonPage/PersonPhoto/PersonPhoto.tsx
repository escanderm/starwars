import React from 'react'
import styles from './PersonPhoto.module.css'
import { useDispatch } from 'react-redux'
import { removePersonFromFavorite, setPersonToFavorite } from '../../../store/actions'
import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

type Props = {
  personPhoto: string
  personName: string
  personId: number | string
  personFavorite: boolean
  setPersonFavorite: (x: boolean) => void
}
const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite
}: Props) => {
  const dispatch = useDispatch()

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(+personId))
      setPersonFavorite(false)
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto
          }
        })
      )
      setPersonFavorite(true)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.photo}
          src={personPhoto ? personPhoto : ''}
          alt={personName ? personName : ''}
        />
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt="icon favorite"
          title="ad to favorite"
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
        />
      </div>
    </>
  )
}

export default PersonPhoto
