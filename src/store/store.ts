import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers'
import { setLocalStorage } from '../utils/localStorage'

const store = createStore(rootReducer)

store.subscribe(() => {
  setLocalStorage('store', store.getState().favoriteReducer)
})

export default store
