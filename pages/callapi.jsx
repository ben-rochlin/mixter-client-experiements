import { useEffect, useState } from 'react'
import styles from '../styles/CallApi.module.scss'
import blip from 'utils.js'

const CallApi = () => {

  const [loaded, setLoaded] = useState(false)
  const [url, setUrl] = useState('place url here')
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  useEffect(() => {
    console.log('hey from effect', url, loaded, blip)
  }, [url, loaded])

  const HitApi = (e) => {
    console.log('e', e.preventDefault())
    // e.preventDefault()
    console.log(loaded, 'loaded b4', blip)
    setLoaded(true)
    setUrl(blip)
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
      <div className={styles.bottomDiv}>
        <h1>{url}</h1>
      </div>
    </div>
  )
}

export default CallApi