import styles from '../styles/CallApi.module.css'

const CallApi = () => {
  return (
    <div className={styles.container}>
      <header className={styles.buttonDiv}>
        <button className={styles.button}>
          <h1>Api call to make</h1>
        </button>
        <input type="text" className={styles.input} />
      </header>
      <div className={styles.bottomDiv}>
        bottom div
      </div>
    </div>
  )
}

export default CallApi