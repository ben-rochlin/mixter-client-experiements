import axios from "axios";
import sanitizeHtml from 'sanitize-html';


export const GetPage = async (url) => {
  console.log('begin')
  let resp = await axios.get(url)
    .then((response) => {
      // console.log('success from axios', url, typeof response.data)
      return response.data
    })
    .catch((err) => {
      // console.log('err from axios')
      return err
    })

  // console.log('yippy', resp.data)
  return resp
}


export const SANITIZE = (html) => {
  const filtered = sanitizeHtml(html, {
    allowedTags: ['article', 'h1', 'h2', 'p'],
  })
  const filterToArticleTag = filtered.substring( filtered.indexOf("<article>"), filtered.indexOf("</article>") + 10 );

  return filterToArticleTag
} 
