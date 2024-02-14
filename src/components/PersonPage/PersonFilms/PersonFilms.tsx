import React, { FC, useEffect, useState } from 'react'
import { makeConcurrentRequest } from '../../../utils/network'

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
    <ul>
      {filmsName
        .sort((a, z) => a.episode_id - z.episode_id)
        .map(({ title, episode_id }) => (
          <li key={episode_id}>
            <span>Episode {episode_id}</span>
            <span> : </span>
            <span>{title}</span>
          </li>
        ))}
    </ul>
  )
}

export default PersonFilms
