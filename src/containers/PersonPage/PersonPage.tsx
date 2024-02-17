import React, { Suspense, useEffect, useState } from 'react'
import { getApiResource } from '../../utils/network'
import { API_PERSON } from '../../constants/api'
import { withErrorApi } from '../../hoc-helper/withErrorApi'
import { getPeopleImage } from '../../services/getPeopleData'
import PersonInfo from '../../components/PersonPage/PersonInfo'
import PersonPhoto from '../../components/PersonPage/PersonPhoto'
import styles from './PersonPage.module.css'
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack'
import UiLoading from '../../components/UI/UiLoading'
import { useSelector } from 'react-redux'
import { ActionProps } from '../../store/reducers/favoriteReducer'
import { useParams } from 'react-router'

/* Lazy */
//import PersonFilms from '../../components/PersonPage/PersonFilms'
const PersonFilms = React.lazy(() => import('../../components/PersonPage/PersonFilms'))

type PersonPageProps = {
  setErrorApi: (errorApi: boolean) => {}
}
export interface IState {
  favoriteReducer: ActionProps[]
}
interface ResStateData {
  title: string
  data: string
}

const PersonPage = ({ setErrorApi }: PersonPageProps) => {
  const [personId, setPersonId] = useState<number | string>('')
  const [personInfo, setPersonInfo] = useState<ResStateData[] | null>(null)
  const [personName, setPersonName] = useState<string | null>(null)
  const [personPhoto, setPersonPhoto] = useState<string | null>(null)
  const [personFilms, setPersonFilms] = useState(null)
  const [personFavorite, setPersonFavorite] = useState(false)

  const storeData = useSelector((state: IState) => state.favoriteReducer)
  const { id } = useParams<string>()
  useEffect(() => {
    ;(async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`)
      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Gender', data: res.gender },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Mass', data: res.mass }
        ])
        setPersonName(res.name)

        id && (storeData[+id] ? setPersonFavorite(true) : setPersonFavorite(false))

        id && setPersonId(+id)

        id && setPersonPhoto(getPeopleImage(id))

        res.films.length && setPersonFilms(res.films)

        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    })()
  }, [])

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName && personName}</span>

        <div className={styles.container}>
          {personName && personPhoto && (
            <PersonPhoto
              personPhoto={personPhoto}
              personName={personName}
              personId={personId}
              personFavorite={personFavorite}
              setPersonFavorite={setPersonFavorite}
            />
          )}
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <>
              <Suspense fallback={<UiLoading />}>
                <PersonFilms personFilms={personFilms} />
              </Suspense>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default withErrorApi(PersonPage)
