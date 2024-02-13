import React, { FC } from 'react'
import styles from './PersonPhoto.module.css'

type Props = {
  personPhoto: string
  personName: string
}
const PersonPhoto: FC<Props> = ({ personPhoto, personName }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.photo}
        src={personPhoto ? personPhoto : ''}
        alt={personName ? personName : ''}
      />
    </div>
  )
}

export default PersonPhoto
