import { useEffect, useState } from 'react'
import styles from '../styles/CallApi.module.scss'
import { GetPage, SANITIZE } from 'utils.js'

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
    let resp = await GetPage(url)
    const sanitizedResponse = SANITIZE(resp)
    setContent(sanitizedResponse)
    setLoaded(true)
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
            <div dangerouslySetInnerHTML={{ __html: content }} /> :
            <h1 className={styles.bottomHeader}>nothing loaded</h1>
        }
      </div>
    </div>
  )
}

export default CallApi