import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import routesConfig from '../../routes/routes.config'
import Header from '../../components/Header'
import styles from './App.module.css'

const App: FC = () => {
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
