import React, { FC, useEffect, useRef } from 'react'
import styles from './UiVideo.module.css'
import cn from 'classnames'

export type UiVideoProps = {
  src: string
  classes?: string
  playbackRate?: number
}

const UiVideo: FC<UiVideoProps> = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [])

  return (
    <video ref={videoRef} loop autoPlay muted className={cn(styles.video, classes)}>
      <source src={src} />
    </video>
  )
}

export default UiVideo
