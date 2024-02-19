import styles from './ErrorMessage.module.css'
import UiVideo from '../UI/UiVideo'
import video from './video/han-solo.mp4'

const ErrorMessage = () => {
  return (
    <div>
      <p className={styles.text}>
        The dark side of the force has won.
        <br />
        We cannot display data.
        <br />
        Come back when we fix everything
      </p>

      <UiVideo src={video} classes={styles.video} />
    </div>
  )
}

export default ErrorMessage
