import { useEffect, useState } from 'react'
import styles from '../styles/CallApi.module.scss'
import {GetPage} from 'utils.js'

const CallApi = () => {

  const [url, setUrl] = useState('place url here')
  const [isLoaded, setLoaded] = useState(false)
  const [content, setContent] = useState('ey yo dude')

  // useEffect(() => {
  //   console.log(url)
  // },[url])

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  const HitApi = async (e) => {
    e.preventDefault()
    await GetPage(url)
    .then((response) => {
      console.log('worked', response)
    })
    .catch((err) => {
      console.log(err)
      console.log('didnt work', err)
      setContent(err)
    })
    setLoaded(true)
    e.preventDefault()
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
          isLoaded ?
            <p>{content}</p> :
            <h1 className={styles.bottomHeader}>nothing loaded</h1>
        }
      </div>
    </div>
  )
}

export default CallApi