import { useEffect } from "react"
import { listBuckets } from "utils.js"


const s3Upload = () => {

useEffect(() => {
  console.log('hello')
  listBuckets()
},[])


  return (
      <>
      <h1>uploader</h1>
      </>
  )
}

export default s3Upload