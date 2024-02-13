import {
  GUIDE_IMG_EXT,
  HTTPS,
  SWAPI_PARAM_PAGE,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  URL_PERSON_IMG
} from '../constants/api'

const getId = (url: string, category: string) => {
  return url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '')
}

export const getPeopleId = (url: string) => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = (id: string) => `${URL_PERSON_IMG}/${id + GUIDE_IMG_EXT}`

export const getPeoplePageId = (url: string) => {
  return +url.slice(url.lastIndexOf(SWAPI_PARAM_PAGE) + SWAPI_PARAM_PAGE.length, url.length)
}
