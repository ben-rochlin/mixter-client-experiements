import axios from "axios";

export const GetPage = async (url) => {
  await axios.get(url)
  .then((response) => {
    return response.data
  })
  .catch((err) => {
    return err
  })
}