import styles from './PeopleList.module.css'
import { IApiData } from '../../../interfaces'
import { Link } from 'react-router-dom'

type PeopleResProps = {
  people: IApiData[]
}

const PeopleList = ({ people }: PeopleResProps) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ name, id, img }) => (
        <li key={id} className={styles.list__item}>
          <Link to={`/people/${id}`}>
            <img src={img} alt={name} className={styles.person__photo} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PeopleList
