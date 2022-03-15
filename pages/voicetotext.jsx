import { useEffect, useState } from 'react'
import styles from '../styles/VoiceText.module.scss'
import { GetPage, SANITIZE } from 'utils.js'

const CallApi = () => {

  const [text, setText] = useState('place text')
  const [isLoaded, setLoaded] = useState(false)
  const [content, setContent] = useState('ey yo dude')

  // useEffect(() => {
  //   console.log(url)
  // },[url])

  const handleChange = (e) => {
    setText(e.target.value)
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
        Text to Voice
      </header>
      <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={HitApi}>
          <h1>Send text</h1>
        </button>
        <textarea type="text" value={text} className={styles.input} onChange={handleChange} />
      </div>
      <div className={styles.bottomDiv}>

      <audio controls className={styles.audioPlayer}>
Your browser does not support the audio element.
        </audio>

      </div>
    </div>
  )
}

export default CallApi