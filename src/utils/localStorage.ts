export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key)
  return data !== null ? JSON.parse(data) : {}
}

export const setLocalStorage = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data))
}
