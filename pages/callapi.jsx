import { useEffect, useState } from 'react'
import styles from '../styles/CallApi.module.scss'

const CallApi = () => {

  const [loaded, setLoaded] = useState(false)
  const [url, setUrl] = useState('place url here')
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  useEffect(() => {
    console.log('hey from effect', url, loaded)
  }, [url, loaded])

  const HitApi = () => {
    console.log(loaded, 'loaded b4')
    setLoaded(true)
    console.log(loaded, 'loaded after')
  }



  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Cors/Api test
      </header>
      <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={HitApi}>
          <h1>Api call to make</h1>
        </button>
        <input type="text" value={url} className={styles.input} onChange={handleChange} />
      </div>
      <div className={styles.bottomDiv}>
        {
          loaded ?
            <h1>loaded</h1> :
            <h1 className={styles.bottomHeader}>nothing loaded</h1>
        }
      </div>
    </div>
  )
}

export default CallApi