import { JSX } from 'react'

export interface IApiData {
  name: string
  url: string
  img?: string
  id?: string | number
}

export interface IRouterData {
  path: string
  exact?: boolean
  element: (props: {}) => JSX.Element
}
