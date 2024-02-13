import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './PeopleNavigation.module.css'
import UiButton from '../../UI/UiButton'

type PeopleNavigationProps = {
  getResource: (url: string) => Promise<any>
  prevPage: string | null
  nextPage: string | null
  counterPage: number
}
const PeopleNavigation: FC<PeopleNavigationProps> = ({
  getResource,
  nextPage,
  prevPage,
  counterPage
}) => {
  const handleChangeNext = () => {
    if (!nextPage) return
    getResource(nextPage)
  }
  const handleChangePrev = () => {
    if (!prevPage) return
    getResource(prevPage).then((r) => false)
  }

  return (
    <div className={styles.container}>
      <Link to={`/people?page=${counterPage - 1}`} className={styles.buttons}>
        <UiButton text="Previous" disabled={prevPage} handleFunc={handleChangePrev} />
      </Link>
      <Link to={`/people?page=${counterPage + 1}`} className={styles.buttons}>
        <UiButton text="Next" disabled={nextPage} handleFunc={handleChangeNext} />
      </Link>
    </div>
  )
}

export default PeopleNavigation
