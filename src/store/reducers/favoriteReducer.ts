import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants/actionTyps'
import _ from 'lodash'
import { getLocalStorage } from '../../utils/localStorage'

export type ActionProps = {
  type: string
  payload: object | string
}

const initialState = getLocalStorage('store')

const favoriteReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_PERSON_FROM_FAVORITE:
      return _.omit(state, [action.payload])
    default:
      return state
  }
}

export default favoriteReducer
