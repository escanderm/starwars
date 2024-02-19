import React, { useCallback, useEffect, useState } from 'react'
import { API_SEARCH } from '../../constants/api'
import { getApiResource } from '../../utils/network'
import { withErrorApi } from '../../hoc-helper/withErrorApi'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData'
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo'
import { debounce } from 'lodash'
import UiInput from '../../components/UI/UiInput'
import styles from './SearchPage.module.css'

type SearchPageProps = {
  setErrorApi: (errorApi: boolean) => {}
}
interface IPeopleList {
  name: string
  url: string
}
const SearchPage = ({ setErrorApi }: SearchPageProps) => {
  const [inputSearchValue, setInputSearchValue] = useState<any>('')
  const [people, setPeople] = useState([])

  const getResponse = async (param: string) => {
    const res = await getApiResource(API_SEARCH + param)

    if (res) {
      const peopleList = res.results.map(({ name, url }: IPeopleList) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)
        return {
          id,
          img,
          name
        }
      })
      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }
  useEffect(() => {
    getResponse('')
  }, [])

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  )

  const handleInputChange = (value: any) => {
    setInputSearchValue(value)
    debouncedGetResponse(value)
  }

  return (
    <>
      <div>
        <h1 className="header__text">Search</h1>
        <UiInput
          value={inputSearchValue}
          handleInputChange={handleInputChange}
          placeholder="Input character`s name"
          classes={styles.input__search}
        />
        {/*<input*/}
        {/*  type="text"*/}
        {/*  name="search"*/}
        {/*  value={inputSearchValue}*/}
        {/*  onChange={handleInputChange}*/}
        {/*  placeholder=""*/}
        {/*/>*/}
        <SearchPageInfo people={people} />
      </div>
    </>
  )
}

export default withErrorApi(SearchPage)
