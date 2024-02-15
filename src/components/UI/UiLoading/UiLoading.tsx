import React, { FC, useEffect, useState } from 'react'
import styles from './UiLoading.module.css'
import loaderWhite from './img/loader-white.svg'
import loaderBlack from './img/loader-black.svg'
import loaderBlue from './img/loader-blue.svg'
import cn from 'classnames'

export type Props = {
  theme?: string
  isShadow?: boolean
  classes?: string
}

const UiLoading: FC<Props> = ({ theme = 'white', isShadow = true, classes = '' }) => {
  const [loaderIcon, setLoaderIcon] = useState(null)
  useEffect(() => {
    switch (theme) {
      case 'black':
        setLoaderIcon(loaderBlack)
        break
      case 'blue':
        setLoaderIcon(loaderBlue)
        break
      default:
        setLoaderIcon(loaderWhite)
    }
  }, [])
  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon ? loaderIcon : ''}
      alt="Loader"
    />
  )
}

export default UiLoading
