// common
export const HTTPS = 'https://'
export const HTTP = 'http://'

// swapi
export const SWAPI_ROOT: string = 'swapi.dev/api/'
export const SWAPI_PEOPLE: string = 'people'
export const SWAPI_PARAM_PAGE: string = '/?page='
export const SWAPI_PARAM_SEARCH: string = '/?search='

export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE
export const API_SEARCH = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_SEARCH

//visual
const GUIDE_ROOT_IMG: string = 'https://starwars-visualguide.com/assets/img/'
const GUIDE_PEOPLE = 'characters'
export const GUIDE_IMG_EXT = '.jpg'

export const URL_PERSON_IMG = GUIDE_ROOT_IMG + GUIDE_PEOPLE
