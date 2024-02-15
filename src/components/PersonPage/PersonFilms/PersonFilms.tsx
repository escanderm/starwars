import React, { FC, useEffect, useState } from 'react'
import { makeConcurrentRequest } from '../../../utils/network'
import styles from './PersonFilms.module.css'

type Props = {
  personFilms: []
}
interface IProps {
  title: string
  episode_id: number
}
const PersonFilms: FC<Props> = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState<IProps[]>([])

  useEffect(() => {
    ;(async () => {
      const response: IProps[] = await makeConcurrentRequest(personFilms)
      setFilmsName(response)
    })()
  }, [])

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({ title, episode_id }) => (
            <li key={episode_id} className={styles.list__item}>
              <span className={styles.item__episode}>Episode {episode_id}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default PersonFilms
