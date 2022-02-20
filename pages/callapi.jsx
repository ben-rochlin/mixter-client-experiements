import styles from '../styles/CallApi.module.scss'

const CallApi = () => {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
       Cors/Api test
      </header>
      <div className={styles.buttonDiv}>
        <button className={styles.button}>
          <h1>Api call to make</h1>
        </button>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.bottomDiv}>
        <h1 className={styles.bottomHeader}>Bottom Div</h1>
      </div>
    </div>
  )
}

export default CallApi