import { useEffect } from "react"
import { listObjects } from "utils.js"


const s3Upload = () => {

useEffect(() => {
  console.log('hello')
  listObjects()
},[])


  return (
      <>
      <h1>uploader</h1>
      </>
  )
}

export default s3Upload