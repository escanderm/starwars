import { useEffect, useState } from 'react'
import { changeHTTP, getApiResource } from '../../utils/network'
import { getPeopleId, getPeopleImage, getPeoplePageId } from '../../services/getPeopleData'
import PeopleList from '../../components/PeoplePage/PeopleList'
import { IApiData } from '../../interfaces'
import { withErrorApi } from '../../hoc-helper/withErrorApi'
import { API_PEOPLE } from '../../constants/api'
import { useQueryParams } from '../../hooks/useQueryParams'
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation'

type PeoplePageProps = {
  setErrorApi: (errorApi: boolean) => {}
}
interface IResultApi {
  results: IApiData[]
  previous: any
  next: any
}

const PeoplePage = ({ setErrorApi }: PeoplePageProps) => {
  const [people, setPeople] = useState([])
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [counterPage, setCounterPage] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get('page')

  const getResource = async (url: string) => {
    const res: IResultApi = await getApiResource(url)

    if (res) {
      const peopleList: any = res.results.map(({ name, url }: IApiData) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)
        return {
          id,
          name,
          img
        }
      })
      setErrorApi(false)
      setPeople(peopleList)
      setPrevPage(res.previous ? changeHTTP(res.previous) : res.previous)
      setNextPage(res.next ? changeHTTP(res.next) : res.next)
      setCounterPage(getPeoplePageId(url))
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage)
  }, [])

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people.length && <PeopleList people={people} />}
    </>
  )
}

export default withErrorApi(PeoplePage)
