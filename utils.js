import axios from "axios";

export const GetPage = async (url) => {
  console.log('begin')
  let resp = await axios.get(url)
    .then((response) => {
      console.log('success from axios', url, response.data)
      return response.data
    })
    .catch((err) => {
      console.log('err from axios')
      return err
    })

    console.log('yippy', resp.data)
    return resp
}

// export const GetPage = async (url) => {
//   console.log('begin')
//   let thingy = await axios.get(url)
//   console.log('thingyinside', thingy.data)
//   return thingy.data
// }

export const retString = () => {
  return 'yoyoyoyo'
}