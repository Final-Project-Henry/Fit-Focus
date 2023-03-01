import styles from './Loading.module.css'

export default function Loading() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <video
        className={styles.animation}
        src='https://res.cloudinary.com/dm0fwscsy/video/upload/v1677647549/Fit-Focus/videos/loading_video_zddlle.mp4'
        autoPlay
        loop
        muted
      ></video>
      <p className={styles.text}>Cargando...espere por favor</p>
    </div>
  )
}
