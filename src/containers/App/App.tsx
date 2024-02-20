import { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import routesConfig from '../../routes/routes.config'
import Header from '../../components/Header'
import styles from './App.module.css'
import { useTheme } from '../../context/ThemeProvider'
import { getLocalStorage } from '../../utils/localStorage'

const App: FC = () => {
  const { theme } = getLocalStorage('theme')
  const isTheme: any = useTheme()
  useEffect(() => {
    isTheme.change(theme)
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routesConfig.map((route, i) => (
            <Route key={i} path={route.path} Component={route.element} />
          ))}
        </Routes>
      </div>
    </>
  )
}

export default App
