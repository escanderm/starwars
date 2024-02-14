import { HTTP, HTTPS } from '../constants/api'

export const getApiResource = async (url: string) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.error('Could not fetch.', res.status)
      return false
    }

    return await res.json()
  } catch (e: any) {
    console.error('Could not fetch.', e.message)
    return false
  }
}

export const changeHTTP = (url: string): string | null => {
  return url ? url.replace(HTTP, HTTPS) : url
}

export const makeConcurrentRequest = async (urls: []) => {
  const res = await Promise.all(
    urls.map(async (res) => {
      return fetch(res).then((res) => res.json())
    })
  )

  return res
}
