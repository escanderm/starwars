import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getApiResource } from '../../utils/network'
import { API_PERSON } from '../../constants/api'
import { withErrorApi } from '../../hoc-helper/withErrorApi'
import { getPeopleImage } from '../../services/getPeopleData'
import PersonInfo from '../../components/PersonPage/PersonInfo'
import PersonPhoto from '../../components/PersonPage/PersonPhoto'
import styles from './PersonPage.module.css'

type PersonPageProps = {
  setErrorApi: (errorApi: boolean) => {}
}

interface ResStateData {
  title: string
  data: string
}

const PersonPage = ({ setErrorApi }: PersonPageProps) => {
  const [personInfo, setPersonInfo] = useState<ResStateData[] | null>(null)
  const [personName, setPersonName] = useState<string | null>(null)
  const [personPhoto, setPersonPhoto] = useState<string | null>(null)
  const { id } = useParams<any>()
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

        id && setPersonPhoto(getPeopleImage(id))

        /*
          films: []
         */

        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    })()
  }, [])

  return (
    <div className={styles.wrapper}>
      <span className={styles.person__name}>{personName && personName}</span>

      <div className={styles.container}>
        {personName && personPhoto && (
          <PersonPhoto personPhoto={personPhoto} personName={personName} />
        )}
        {personInfo && <PersonInfo personInfo={personInfo} />}
      </div>
    </div>
  )
}

export default withErrorApi(PersonPage)
