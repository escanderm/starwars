import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants/actionTyps'

interface IActionProps {
  [x: string]: {
    name: string
    img: string
  }
}

export const setPersonToFavorite = (person: IActionProps) => {
  return {
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
  }
}

export const removePersonFromFavorite = (id: string | number) => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: id
})
