import HomePage from '../containers/HomePage'
import PeoplePage from '../containers/PeaplePage'
import { IRouterData } from '../interfaces'
import NotFoundPage from '../containers/NotFoundPage'
import PersonPage from '../containers/PersonPage'
import FavoritePage from '../containers/FavoritePage'

const routesConfig: IRouterData[] = [
  {
    element: HomePage,
    exact: true,
    path: '/'
  },
  {
    element: FavoritePage,
    path: '/favorites',
    exact: true
  },
  {
    element: PeoplePage,
    path: '/people',
    exact: true
  },
  {
    element: PersonPage,
    path: '/people/:id',
    exact: true
  },
  {
    element: NotFoundPage,
    path: '/not-found',
    exact: true
  },
  {
    element: NotFoundPage,
    path: '*',
    exact: false
  }
]
export default routesConfig
