import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SearchPageInfo.module.css'

type Props = {
  people: ISearchPageInfo[]
}
interface ISearchPageInfo {
  id: string
  name: string
  img: string
}
const SearchPageInfo = ({ people }: Props) => (
  <>
    {people.length ? (
      <ul className={styles.list__container}>
        {people.map(({ id, name, img }) => (
          <li key={id} className={styles.list__item}>
            <Link to={`/people/${id}`}>
              <img src={img} alt={name} className={styles.person__photo} />
              <p className={styles.person__name}>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <h2 className={styles.person__comment}>No results</h2>
    )}
  </>
)

export default SearchPageInfo
